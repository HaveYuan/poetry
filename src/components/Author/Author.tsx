import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './Author.scss'

type PageStateProps = {
  authorInfo: 作者数据
}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {

}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Author {
  props: IProps,
  state: PageState
}

class Author extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  render() {
    const { authorInfo } = this.props;
    return (
      <View className='Author'>
        <Image className='header-icon' src={authorInfo.imgUrl || "https://cdn.jsdelivr.net/gh/haveyuan/blog_img/comic/cike.webp"}></Image>
        <Text className='name'>{authorInfo.name}</Text>
      </View>
    )
  }

}
export default Author