import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './Author.scss'


type PageStateProps = {
  authorInfo: Array<作者数据>
  getAuthorInfo: (作者数据)=>void
}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Author {
  props: IProps,
  state: PageState
}
class Author extends Component {
  static externalClasses = ['search-content']
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { authorInfo, getAuthorInfo } = this.props;
    return (
      <View className='author-grid search-content'>
        {authorInfo && authorInfo.map(item => {
          return (
            <View className='Author' onClick={()=>getAuthorInfo(item)}>
              <Image className='header-icon' src={item.imgUrl || "https://cdn.jsdelivr.net/gh/haveyuan/poetry_img/head/default.jpg"} mode='aspectFill'></Image>
              <Text className='name'>{item.name}</Text>
            </View>
          )
        })}
      </View>
    )
  }

}
export default Author