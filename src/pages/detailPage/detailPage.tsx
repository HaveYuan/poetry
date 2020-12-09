import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './detailPage.scss'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {
  name: string
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface detailPage {
  props: IProps;
  state: PageState
}

class detailPage extends Component<PageOwnProps, PageState> {
  constructor(props) {
    super(props)
    this.state = {
      name: '小红'
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <View className='detailPage'>
        <Text>hello world</Text>
      </View>
    )
  }

}
export default detailPage