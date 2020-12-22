import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import logApi from '@/utils/log'
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
  num: Number,
  _id: string
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
      num: 1,
      _id: ''
    }
  }

  componentDidMount() {

    this.switchTag();

    // 获取随机数设置背景
    const num = Math.floor(Math.random()*(5-1+1))+1;
    this.setState({
      num
    })

    // 有参数时
    const tag = this.$router.params['tag'];
    const _id = this.$router.params['_id'];

    if(tag && _id) {
      const { dispatch } = this.props;
      dispatch({
        type: 'poetryDetail/poetryApi',
        payload: {
          action: 'getPoetryDetail',
          data: {
            tag,
            _id
          }
        },
        callback: poetryRes => {
          // 查询作者相关信息
          if(poetryRes.poetryInfo.author) {
            dispatch({
              type: 'author/searchAuthor',
              payload: {
                data: {
                  author: poetryRes.poetryInfo.author,
                  isReg: false
                }
              }
            })
          }
      
          // 诗词详情
          dispatch({
            type: 'poetryDetail/save',
            payload: {
              tag,
              poetryInfo: poetryRes.poetryInfo,
            }
          })

          this.setState({
            _id
          })

          this.switchTag();
        }
      })
    }
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
    const { author:{hasAuthor, authorInfo} } = this.props;
    if(hasAuthor) {
      logApi('detail_page', {
        action: '点击查看作者详情',
        author_name: authorInfo.name
      })
      Taro.navigateTo({
        url: '/pages/author/authorInfo/authorInfo'
      });
    }
  }
  
  onShareAppMessage() {
    const { _id } = this.state;
    const { poetryDetail:{tag} } = this.props;
    return {
      title: '诗词鉴赏',
      path: `/pages/detailPage/detailPage?tag=${tag}&_id=${_id}&is_share=1`,
    }
  }

  config: Config = {
    navigationBarBackgroundColor: '#fff',
  }

  render() {
    const { poetryDetail:{poetryInfo, tag}, author:{hasAuthor} } = this.props;
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