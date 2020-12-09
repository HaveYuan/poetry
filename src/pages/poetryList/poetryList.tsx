import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Loading from '@/components/Loading/Loading'
import ListItem from '@/components/ListItem/ListItem'
import { requestCloud } from '@/utils/cloudFn'
import showToast from '@/utils/showToast'
import './poetryList.scss'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {
	loading: boolean,
	tag: string,
	pageNo: number,
	poetryList: Array<poetryItem>
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface poetryList {
	props: IProps;
	state: PageState
}

class poetryList extends Component<PageOwnProps, PageState> {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			tag: '',
			pageNo: 1,
			poetryList: []
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
		}).then(res => {
			const {poetryList} = this.state;
			if(res.data) {
				const _pageNo = pageNo + 1;
				this.setState({
					poetryList: poetryList.concat(res.data),
					pageNo: _pageNo
				})
				if(pageNo === res.totalPage) {
					this.setState({
						loading: false
					})
				}
			}
		}).catch(err => {
			showToast(err.msg)
		})
	}

	toDetail(id) {
		const { tag } = this.state;
		Taro.navigateTo({
			url: `/pages/detailPage/detailPage?tag=${tag}&id=${id}`
		});
	}

	render() {
		const { loading, poetryList, tag } = this.state;
		return (
			<View className='poetryList'>
				{poetryList.map(item => {
					return (
						<ListItem
							tag={tag}
							poetryObj={item}
							clickFn={()=>this.toDetail(item._id)}
						/>
					)
				})}
				<Loading loading={loading}/>
			</View>
		)
	}

}
export default poetryList