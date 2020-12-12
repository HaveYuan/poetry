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
  ({poetryDetail}) => ({poetryDetail})
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
    requestCloud({
      clounFnName: 'poetry', 
      controller: 'poetry',
      action: 'getHotAuthor'
    }).then((res:any) => {
      console.log(res)
      if(res.data.length > 0) {
        this.setState({
          hotAuthor: res.data
        })
      }
    }).catch(err => {
      showToast({title:'网络异常'})
    })
  }


  config: Config = {
    navigationBarTitleText: '作者'
  }

  searchContent = (e) => {
    console.log(e)
    const value = e.detail.value.replace(" ", "");

    if(value) {
      Taro.showLoading({
        title: '正在搜索',
        mask: true
      });
      requestCloud({
        clounFnName: 'poetry', 
        controller: 'poetry', 
        action: 'searchAuthor',
        data: {
          author: value
        }
      }).then((res:any) => {
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
      }).catch(_ => {
        showToast({title:'网络异常'})
      })
    }
  }

  getAuthorInfo = (item) => { // 获取作者详情
    const { dispatch } = this.props;
    dispatch({
      type: 'poetryDetail/save',
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