import Taro, { Component } from '@tarojs/taro'
import { View, Text, Block } from '@tarojs/components'
import './Loading.scss'

type PageStateProps = {
  loading: boolean,
  len: number
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
    const { loading, len } = this.props;
    return (
      <View className='Loading'>
        {(len === 0 && !loading) && (<View className='loading-tip'>好像没有您要找的内容，试试换个关键字吧~</View>)}
        {len > 0 && (
          <Block>
            {loading && (<View className='loading-tip'>
            <Text className='loading-icon'></Text>加载中
            </View>)}
            {(!loading && len > 10) && (<View className='loading-tip'>我是有底线的~</View>)}
          </Block>
        )}
      </View>
    )
  }

}
export default Loading;