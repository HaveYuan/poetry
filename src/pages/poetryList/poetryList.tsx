import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Loading from '@/components/Loading/Loading'
import ListItem from '@/components/ListItem/ListItem'
import { requestCloud } from '@/utils/cloudFn'
import showToast from '@/utils/showToast'
import './poetryList.scss'

type PageStateProps = {
	poetryDetail: 诗词详情数据
}

type PageDispatchProps = {
	dispatch: any
}

type PageOwnProps = {}

type PageState = {
	loading: boolean,
	tag: string,
	pageNo: number,
	poetryListData: Array<poetryItem>
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface poetryList {
	props: IProps,
	state: PageState
}

@connect(({poetryDetail}) => ({poetryDetail}))
class poetryList extends Component<PageOwnProps, PageState> {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			tag: '',
			pageNo: 1,
			poetryListData: []
		}
	}

	componentDidMount() {
		Taro.setNavigationBarTitle({
			title: this.$router.params.name
		});
		const tag = this.$router.params.tag;
		this.setState({
			tag
		}, () => {
			this.getpoetryList(1);
		})
	}

	onReachBottom() {
		const { loading, pageNo } = this.state;
		if(loading) {
			this.getpoetryList(pageNo);
		}
	}

	/**
	 * 获取诗词列表
	 */
	getpoetryList(pageNo) {
		requestCloud({
			clounFnName: 'poetry', 
			controller: 'poetry', 
			action: 'getPoetryList',
			data: {
				pageNo,
				pageSize: 20,
				tag: this.state.tag
			}
		}).then((res:any) => {
			const {poetryListData} = this.state;
			if(res.data) {
				const _pageNo = pageNo + 1;
				this.setState({
					poetryListData: poetryListData.concat(res.data),
					pageNo: _pageNo
				})
				if(pageNo === res.totalPage) {
					this.setState({
						loading: false
					})
				}
			}
		}).catch(err => {
			showToast({title:err.msg})
		})
	}

	toDetail(item) {
		const { tag } = this.state;
		const { dispatch } = this.props;

		dispatch({
			type: 'poetryDetail/save',
			payload: {
				tag,
				poetryInfo: item,
			}
		})
		Taro.navigateTo({
			url: '/pages/detailPage/detailPage'
		});
	}

	render() {
		const { loading, poetryListData, tag } = this.state;
		return (
			<View className='poetryList'>
				{poetryListData.map(item => {
					return (
						<ListItem
							key={item._id}
							tag={tag}
							poetryObj={item}
							clickFn={()=>this.toDetail(item)}
						/>
					)
				})}
				<Loading loading={loading}/>
			</View>
		)
	}

}
export default poetryList