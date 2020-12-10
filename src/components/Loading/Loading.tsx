import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './Loading.scss'

type PageStateProps = {
  loading: boolean
}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {

}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Loading {
  props: IProps,
  state: PageState
}

class Loading extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { loading } = this.props;
    return (
      <View className='Loading'>
        {loading && (<View className='loading-tip'>
          <Text className='loading-icon'></Text>加载中
        </View>)}
        {!loading && (<View className='loading-tip'>我是有底线的~</View>)}
      </View>
    )
  }

}
export default Loading;