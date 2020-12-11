import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Search from '@/components/Search/Search'
import Author from '@/components/Author/Author'
import { requestCloud }  from '@/utils/cloudFn'
import showToast from '@/utils/showToast';

import './authorIndex.scss'

type PageStateProps = {}

type PageDispatchProps = {}

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
    Taro.showLoading({
      title: '正在搜索',
      mask: true
    });
    if(value) {
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
        }
      }).catch(_ => {
        console.log(_)
        showToast({title:'网络异常'})
      })
    }
  }

  render() {
    const { hotAuthor, searchAuthorInfo } = this.state;

    return (
      <View className='authorIndex'>
        <Search 
          searchFn={this.searchContent}
          placeholder='请输入作者名称'
        />
        {searchAuthorInfo.length > 0 &&(<View className='author-grid search-content'>
          {searchAuthorInfo.map(item => {
            return (
              <Author
                key={item._id}
                authorInfo={item}
              />
            )
          })}
        </View>)}
        <View className='hot-wrap'>
          <View className='tips'>著名诗人</View>
          <View className='author-grid'>
            {hotAuthor.map(item => {
              return (
                <Author
                  key={item._id}
                  authorInfo={item}
                />
              )
            })}
          </View>
        </View>
      </View>
    )
  }

}
export default authorIndex