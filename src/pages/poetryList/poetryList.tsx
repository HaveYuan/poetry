import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Loading from '@/components/Loading/Loading'
import ListItem from '@/components/ListItem/ListItem'
import Search from '@/components/Search/Search'
import logApi from '@/utils/log'
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
	poetryListData: Array<poetryItem>,
	inputVal: string
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
			poetryListData: [],
			inputVal: ''
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
		const { inputVal } = this.state;
		dispatch({
			type: 'poetryDetail/poetryApi',
			payload: {
				action: 'getPoetryList',
				data: {
					pageNo,
					pageSize: 20,
					tag: this.state.tag,
					value: inputVal
				}
			},
			callback: res => {
				const {poetryListData} = this.state;
				if(res.data) {
					if(pageNo == 1) {
						const _pageNo = pageNo + 1;
						this.setState({
							poetryListData: res.data,
							pageNo: _pageNo
						})
					}else {
						const _pageNo = pageNo + 1;
						this.setState({
							poetryListData: poetryListData.concat(res.data),
							pageNo: _pageNo
						})
					}

					if(pageNo === res.totalPage || res.totalPage === 0) {
						this.setState({
							loading: false
						})
					}else {
						this.setState({
							loading: true
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
				type: 'author/searchAuthor',
				payload: {
					data: {
						author: item.author,
						isReg: false
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

		logApi('poetry_list', {
      action: '点击诗词详情',
      poetry: JSON.stringify(item)
    })
	}

	searchInput = (e) => {
		this.setState({
			inputVal: e.detail.value
		},()=> {
			this.getpoetryList(1);
			if(e.detail.value!== '') {
				logApi('poetry_list', {
					action: '搜索诗词内容',
					inputVal: JSON.stringify(e.detail.value)
				})
			}
		})
	}

	render() {
		const { loading, poetryListData, tag } = this.state;
		return (
			<View className='poetryList'>
				<View className='search-area'>
					<Search
						placeholder='请输入关键字搜索'
						searchInput={this.searchInput}
					/>
				</View>
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
				<Loading 
					len={poetryListData.length}
					loading={loading}
				/>
			</View>
		)
	}

}
export default poetryList