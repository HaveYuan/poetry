import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './authorInfo.scss'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {
  name: string
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface authorInfo {
  props: IProps,
  state: PageState
}

class authorInfo extends Component<IProps, PageState> {
  constructor(props) {
    super(props)
    this.state = {
      name: '小红'
    }

  }
  componentWillReceiveProps(nextProps) { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  config: Config = {
    navigationBarTitleText: '作者'
  }

  render() {
    return (
      <View className='authorInfo'>
        <Text>hello world</Text>
      </View>
    )
  }

}
export default authorInfo