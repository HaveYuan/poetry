import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {
  barHeight: number
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
  state: PageState
}

class Index extends Component<PageOwnProps, PageState> {
  constructor(props) {
    super(props)
    this.state = {
      barHeight: 0
    }

  }
  componentWillReceiveProps(nextProps) { }

  componentWillUnmount() { }

  componentDidMount() {
    const barStatus = Taro.getMenuButtonBoundingClientRect()
    Taro.getSystemInfo({
      success: res => {
        console.log(res)
        this.setState({
          barHeight: barStatus.top
        })
      }
    })

    
  }

  componentDidShow() { }

  componentDidHide() { }

  config: Config = {
    navigationStyle: 'custom'
  }

  render() {
    const { barHeight } = this.state;
    return (
      <View className='Index'>
        <View className="index-title" style={{top:barHeight+'px'}}>诗词大全</View>
      </View>
    )
  }

}
export default Index