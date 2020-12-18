import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './Tools.scss'
import roteteUrl from '@/images/rotate.png'
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

  toAbout() {
    Taro.navigateTo({
      url: '/pages/about/about'
    });
  }

  toMy() {
    Taro.navigateTo({
      url: '/pages/my/my'
    });
  }

  render() {
    const { menuShow } = this.state;
    return (
      <View className='Tools'>
        <Image src={roteteUrl} className={menuShow ? 'tool-box' : 'tool-box rotate'} onClick={this.openMenu}></Image>
        <View className={menuShow ? 'tools-item white-fonts move' : 'tools-item'} onClick={this.toAuthorIndex}>作者</View>
        <View className={menuShow ? 'tools-item blank-fonts move2' : 'tools-item'} onClick={this.toAbout}>关于</View>
        <View className={menuShow ? 'tools-item gray-fonts move3' : 'tools-item'} onClick={this.toMy}>我的</View>
      </View>
    )
  }

}
export default Tools