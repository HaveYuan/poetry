import Taro, { Component, Config } from '@tarojs/taro'
import { View, OpenData } from '@tarojs/components'
import './my.scss'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {
  name: string
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface my {
  props: IProps,
  state: PageState
}

class my extends Component<PageOwnProps, PageState> {
  constructor(props) {
    super(props)
    this.state = {
      name: '小红'
    }
  }

  config: Config = {
    navigationBarTitleText: '个人中心',
    navigationBarBackgroundColor: '#161823',
    navigationBarTextStyle: 'white'
  }
  componentWillReceiveProps(nextProps) { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='my'>
        <View className='head-box'>
          <OpenData type="userAvatarUrl" className='user-avatar'></OpenData>
          <OpenData type="userNickName" className='user-name'></OpenData>
        </View>
        <View className='tips'>更多功能，敬请期待~</View>
      </View>
    )
  }

}
export default my