import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './Tools.scss'
import roteteUrl from '@/images/rotate.png'
import logApi from '@/utils/log'

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

  componentDidHide() {
    this.setState({
      menuShow: false
    })
  }

  openMenu() {
    const { menuShow } = this.state;
    if(menuShow) {
      logApi('index_page', {
        action: '关闭菜单',
      })
      this.setState({
        menuShow: false
      })
    } else {
      logApi('index_page', {
        action: '打开菜单',
      })
      this.setState({
        menuShow: true
      })
    }
  }

  toAuthorIndex() {
    logApi('index_page', {
      action: '点击菜单作者',
    })
    Taro.navigateTo({
      url: '/pages/author/authorIndex/authorIndex'
    });
  }

  toAbout() {
    logApi('index_page', {
      action: '点击菜单关于',
    })
    Taro.navigateTo({
      url: '/pages/about/about'
    });
  }

  toMy() {
    logApi('index_page', {
      action: '点击菜单我的',
    })
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