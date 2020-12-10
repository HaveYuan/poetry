import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './detailPage.scss'

type PageStateProps = {
  poetryDetail: 诗词详情数据
}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {

}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface detailPage {
  props: IProps,
  state: PageState
}

@connect(
  ({poetryDetail}) => ({poetryDetail})
)
class detailPage extends Component<PageOwnProps, PageState> {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    this.switchTag();
  }

  switchTag() {
    const { poetryDetail:{poetryInfo, tag} } = this.props;
    switch(tag) {
      case 'yuanqu':
        this.setTitle(poetryInfo.title)
        break;
      case 'lunyu':
        this.setTitle(poetryInfo.chapter)
        break;
      case 'shijing':
        const title = poetryInfo.chapter+'·'+poetryInfo.section+'-'+poetryInfo.title
        this.setTitle(title)
        break;
      case 'youmengying':
        this.setTitle('幽梦影')
        break;
      case 'sishuwujing':
        this.setTitle(poetryInfo.chapter)
        break;
      default:
        this.setTitle('诗词详情')
        break;
    }
    
  }

  setTitle(title) {// 设置标题
    Taro.setNavigationBarTitle({
      title
    });
  }

  render() {
    const { poetryDetail:{poetryInfo, tag} } = this.props;
    console.log(poetryInfo)
    console.log(tag)
    return (
      <View className='detailPage'>
        {tag === 'yuanqu' && (
          <View>
            
          </View>
        )}
        <Text>hello world</Text>
      </View>
    )
  }

}
export default detailPage