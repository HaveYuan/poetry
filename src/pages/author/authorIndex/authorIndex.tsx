import Taro, { Component, Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text } from '@tarojs/components'
import Search from '@/components/Search/Search'
import Author from '@/components/Author/Author'
import { requestCloud }  from '@/utils/cloudFn'
import showToast from '@/utils/showToast';

import './authorIndex.scss'

type PageStateProps = {}

type PageDispatchProps = {
  dispatch: (object)=>void
  poetryDetail: 诗词详情数据
  author: 作者相关
}

type PageOwnProps = {}

type PageState = {
  hotAuthor: Array<作者数据>
  searchAuthorInfo: Array<作者数据>
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface authorIndex {
  props: IProps;
  state: PageState
}

@connect(
  ({poetryDetail,author}) => ({poetryDetail,author})
)
class authorIndex extends Component<IProps, PageState> {
  constructor(props) {
    super(props)
    this.state = {
      hotAuthor: [],
      searchAuthorInfo: []
    }
  }


  componentDidMount() { 
    const { dispatch } = this.props;
    dispatch({
      type: 'author/authorApi',
      payload: {
        clounFnName: 'poetry', 
        controller: 'poetry',
        action: 'getHotAuthor',
      },
      callback: res => {
        this.setState({
          hotAuthor: res.data
        })
      }
    })
  }


  config: Config = {
    navigationBarTitleText: '作者'
  }

  searchContent = (e) => {
    const { dispatch } = this.props;
    const value = e.detail.value.replace(" ", "");

    if(value) {
      Taro.showLoading({
        title: '正在搜索',
        mask: true
      });

      dispatch({
        type: 'author/authorApi',
        payload: {
          action: 'searchAuthor',
          data: {
            author: value
          }
        },
        callback: res => {
          if(res.data.length > 0) {
            Taro.hideLoading();
            this.setState({
              searchAuthorInfo: res.data
            })
          }else {
            showToast({title:'查无此人'})
            this.setState({
              searchAuthorInfo: []
            })
          }
        }
      })
    }
  }

  getAuthorInfo = (item) => { // 获取作者详情
    const { dispatch } = this.props;
    dispatch({
      type: 'author/save',
      payload: {
        authorInfo: item
      }
    })
    Taro.navigateTo({
      url: '/pages/author/authorInfo/authorInfo'
    })
  }

  render() {
    const { hotAuthor, searchAuthorInfo } = this.state;

    return (
      <View className='authorIndex'>
        <Search 
          searchFn={this.searchContent}
          placeholder='请输入作者名称'
        />
        {searchAuthorInfo.length > 0 && (
          <Author authorInfo={searchAuthorInfo} search-content='search-content' getAuthorInfo={this.getAuthorInfo} />
        )}
        <View className='hot-wrap'>
          {hotAuthor.length>0 && (<View className='tips'>著名作者</View>)}
          <Author authorInfo={hotAuthor} getAuthorInfo={this.getAuthorInfo}/>
        </View>
      </View>
    )
  }

}
export default authorIndex