import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './authorInfo.scss'

type PageStateProps = {
  poetryDetail: 诗词详情数据
}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface authorInfo {
  props: IProps,
  state: PageState
}

@connect(
  ({poetryDetail}) => ({poetryDetail})
)
class authorInfo extends Component<IProps, PageState> {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  config: Config = {
    navigationBarTitleText: '作者介绍',
    navigationBarBackgroundColor: '#D9C1A5'
  }

  render() {
    const { poetryDetail:{authorInfo} } = this.props;
    return (
      <View className='authorInfo'>
        <Image className='head-img' lazyLoad mode='widthFix' src={authorInfo.imgUrl ? authorInfo.imgUrl : 'https://cdn.jsdelivr.net/gh/haveyuan/poetry_img/head/default.jpg'}></Image>
        <View className='name'>{authorInfo.name}</View>
        <Text className='desc'>{authorInfo.description}</Text>
      </View>
    )
  }

}
export default authorInfo