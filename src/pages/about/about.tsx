import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './about.scss'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {

}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface about {
  props: IProps,
  state: PageState
}

class about extends Component<PageOwnProps, PageState> {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  config: Config = {
    navigationBarTitleText: '关于'
  }


  render() {
    return (
      <View className='about'>
        <View className='title'>声明</View>
        <View>本小程序数据及相关图片均来源于互联网，遵循开源协议，如有疑问，请联系本人邮箱处理或者在github上提交issue</View>
        <View>email：<Text className='link' selectable>rory_lin@163.com</Text></View>
        <View>github：<Text className='link' selectable>https://github.com/HaveYuan</Text></View>
        <View>博客：<Text className='link' selectable>https://haveyuan.github.io/</Text></View>
        <View>博客（备用）：<Text className='link' selectable>https://haveyuan.gitee.io/</Text></View>
      </View>
    )
  }

}
export default about