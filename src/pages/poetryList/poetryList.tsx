import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Loading from '@/components/Loading/Loading'
import ListItem from '@/components/ListItem/ListItem'
import { requestCloud } from '@/utils/cloudFn'
import './poetryList.scss'

type PageStateProps = {
	poetryDetail: 诗词详情数据
	author: 作者相关
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

@connect(({poetryDetail,author}) => ({poetryDetail,author}))
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

	config: Config = {
		navigationBarBackgroundColor: '#D9C1A5'
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
	getpoetryList = (pageNo) => {
		const { dispatch } = this.props;

		dispatch({
			type: 'poetryDetail/poetryApi',
			payload: {
				action: 'getPoetryList',
				data: {
					pageNo,
					pageSize: 20,
					tag: this.state.tag
				}
			},
			callback: res => {
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
			}	
		})
	}

	toDetail = (item) => {
		const { tag } = this.state;
		const { dispatch, author:{authorInfo} } = this.props;
		if(item.author && (item.author === authorInfo.name)) {
			dispatch({
				type: 'author/save',
				payload: {
					hasAuthor: true
				}
			})
		}

		if(item.author && (item.author !== authorInfo.name)) {
			// 查询作者相关信息
			dispatch({
				type: 'author/authorApi',
				payload: {
					action: 'searchAuthor',
					data: {
						author: item.author,
						isReg: false
					}
				},
				callback: res => {
					if(res.data.length>0) {
						// 保存作者信息
						dispatch({
							type: 'author/save',
							payload: {
								authorInfo: res.data[0],
								hasAuthor: true
							}
						})
					}
				}
			})
		}

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