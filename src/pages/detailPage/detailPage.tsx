import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './detailPage.scss'

type PageStateProps = {
  poetryDetail: 诗词详情数据,
  author: 作者相关
}

type PageDispatchProps = {
  dispatch: any
}

type PageOwnProps = {}

type PageState = {
  num: Number
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface detailPage {
  props: IProps,
  state: PageState
}

@connect(
  ({poetryDetail,author}) => ({poetryDetail,author})
)
class detailPage extends Component<PageOwnProps, PageState> {
  constructor(props) {
    super(props)
    this.state = {
      num: -1
    }
  }

  componentDidMount() {
    this.switchTag();
    const num = Math.floor(Math.random()*(5-1+1))+1;
    this.setState({
      num
    })
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'author/save',
      payload: {
        hasAuthor: false
      }
    })
  }

  switchTag = () => {
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

  setTitle = (title) => {// 设置标题
    Taro.setNavigationBarTitle({
      title
    });
  }

  toAuthorInfo = () => {
    const { author:{hasAuthor} } = this.props;
    if(hasAuthor) {
      Taro.navigateTo({
        url: '/pages/author/authorInfo/authorInfo'
      });
    }
  }

  config: Config = {
    navigationBarBackgroundColor: '#fff',
  }

  render() {
    const { poetryDetail:{poetryInfo, tag}, author:{hasAuthor} } = this.props;
    console.log(poetryInfo)
    const {num} = this.state;
    return (
      <View className='detailPage' style={{backgroundImage: `url(https://cdn.jsdelivr.net/gh/haveyuan/poetry_img/bg/bg${num}.webp)`}}>
        <ScrollView scrollY className='pageScroll'>
        {(tag === 'yuanqu' || tag === 'nantang' || tag === 'huajianji') && (
          <View className='wrap'>
            <View className='title'>{poetryInfo.title}</View>
            <View className={hasAuthor ? 'author txt-line' : 'author'} onClick={this.toAuthorInfo}>{poetryInfo.author}</View>
            <View className='content'>
              {poetryInfo.paragraphs.map(item => {
                return (
                  <View>{item}</View>
                )
              })}
            </View>
            {poetryInfo.notes && poetryInfo.notes.length>0 && <View className='comment'>
              <Text style={{fontWeight:'bold'}}>解析：</Text>
              <View>
                {poetryInfo.notes.map(item => {
                  return (
                    <View className='paragraphs'>{item}</View>
                  )
                })
                }
              </View>
            </View>
            }
          </View>
        )}

        {tag === 'lunyu' && (
          <View className='wrap'>
            <View className='title'>{poetryInfo.chapter}</View>
            <View className='content'>
              {poetryInfo.paragraphs.map(item => {
                return (
                  <View className='paragraphs'>{item}</View>
                )
              })}
            </View>
          </View>
        )}

        {tag === 'shijing' && (
          <View className='wrap'>
            <View className='title'>{poetryInfo.title}</View>
            <View className='author'>{poetryInfo.chapter}·{poetryInfo.section}</View>
            <View className='content'>
              {poetryInfo.content.map(item => {
                return (
                  <View>{item}</View>
                )
              })}
            </View>
          </View>
        )}

        {tag === 'sishuwujing' && (
          <View className='wrap'>
            <View className='title'>{poetryInfo.chapter}</View>
            <View className='author'>{poetryInfo.tags}</View>
            <View className='content'>
              {poetryInfo.paragraphs.map(item => {
                return (
                  <View className='paragraphs'>{item}</View>
                )
              })}
            </View>
          </View>
        )}

        {tag === 'youmengying' && (
          <View className='wrap'>
            <View className='content'>
              {poetryInfo.content}
            </View>
            <View className='comment'>
              <Text style={{fontWeight:'bold'}}>名人评析：</Text>
              <View>
                {poetryInfo.comment.map(item => {
                  return (
                    <View className='paragraphs'>{item}</View>
                  )
                })
                }
              </View>
            </View>
          </View>
        )}
        </ScrollView>
      </View>
    )
  }

}
export default detailPage