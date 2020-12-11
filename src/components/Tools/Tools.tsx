import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './Tools.scss'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {
  menuShow: boolean
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Tools {
  props: IProps,
  state: PageState
}

class Tools extends Component<IProps, PageState> {
  constructor(props) {
    super(props)
    this.state = {
      menuShow: false
    }
  }

  openMenu() {
    const { menuShow } = this.state;
    if(menuShow) {
      this.setState({
        menuShow: false
      })
    } else {
      this.setState({
        menuShow: true
      })
    }
  }

  toAuthorIndex() {
    Taro.navigateTo({
      url: '/pages/author/authorIndex/authorIndex'
    });
  }

  render() {
    const { menuShow } = this.state;
    return (
      <View className='Tools'>
        <View className={menuShow ? 'tool-box' : 'tool-box rotate'} onClick={this.openMenu}></View>
        <View className={menuShow ? 'tools-item move' : 'tools-item'} onClick={this.toAuthorIndex}>作者</View>
      </View>
    )
  }

}
export default Tools