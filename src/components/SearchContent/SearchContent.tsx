import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './SearchContent.scss'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface SearchContent {
  props: IProps;
  state: PageState
}

class SearchContent extends Component {
  constructor(props) {
    super(props)
    this.state = {}

  }
  componentWillReceiveProps(nextProps) { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='SearchContent'>
        <View className='content-list'>床前明月光，疑是地上霜</View>
        <View className='content-list'>床前明月光，疑是地上霜</View>
        <View className='content-list'>床前明月光，疑是地上霜</View>
      </View>
    )
  }

}
export default SearchContent;