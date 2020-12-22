import Taro, { Component, Config } from '@tarojs/taro'
import { View, Swiper, SwiperItem, ScrollView, Text, Button, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Tools from '@/components/Tools/Tools';
import logApi from '@/utils/log';
import './index.scss'

type PageStateProps = {
	poetryDetail: 诗词详情数据
}

type PageDispatchProps = {
  dispatch: any
}

type PageOwnProps = {}

type PageState = {
  barHeight: number,
  catalog: Array<catalogItem>,
  bgUrl: string,
  imgUrl: string
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps,
  state: PageState
}
@connect(({poetryDetail}) => ({poetryDetail}))
class Index extends Component<PageOwnProps, PageState> {
  constructor(props) {
    super(props)
    this.state = {
      barHeight: 0,
      catalog: [],
      bgUrl: '',
      imgUrl: ''
    }
  }

  componentDidMount() {
    const barStatus = Taro.getMenuButtonBoundingClientRect()
    Taro.getSystemInfo({
      success: _ => {
        this.setState({
          barHeight: barStatus.top
        })
      }
    })

    Taro.cloud.downloadFile({
      fileID: 'cloud://test-hhh.7465-test-hhh-1304398770/poetry/images/bg.webp',
      success: res => {
        if(res.errMsg.indexOf('downloadFile:ok') > -1) {
          this.setState({
            bgUrl: res.tempFilePath
          })
        }
      }
    })

    this.getallTags();
  }

  onShareAppMessage() {
    return {
      title: '这里有最全的诗词种类，快来看看吧！',
      imageUrl: '../../images/share.jpg',
      path: '/pages/index/index?is_share=1',
    }
  }

  config: Config = {
    navigationStyle: 'custom'
  }

  getallTags = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'poetryDetail/poetryApi',
      payload: {
        action: 'allCategories'
      },
      callback: res => {
        this.setState({
          catalog: res.data
        })
      }
    })
  }

  toListPage = (tag, name) => {
    logApi('index_page', {
      action: '点击诗词分类',
      catalog: name
    })
    Taro.navigateTo({
      url: `/pages/poetryList/poetryList?tag=${tag}&name=${name}`
    });
  }

  getCode=()=> {
    const { dispatch } = this.props;
    dispatch({
      type: 'poetryDetail/poetryApi',
      payload: {
        action: 'getCode',
        data: {
          scene: encodeURIComponent('from=code'),
          page: 'pages/index/index'
        }
      },
      callback: res => {
        console.log(res)
        const arrayBuffer = new Uint8Array(res.buffer.data)
        const base64 = "data:image/png;base64,"+Taro.arrayBufferToBase64(arrayBuffer)
        console.log(base64)
        this.setState({
          imgUrl: base64
        })
      }
    })
  }

  render() {
    const { bgUrl, barHeight, catalog,imgUrl } = this.state;
    return (
      <View className='Index' style={{backgroundImage: 'url('+bgUrl+')'}}>
        <View className="index-title" style={{top:barHeight+'px'}}>诗词大全</View>
        {/* <Image src={imgUrl}></Image>
        <Button onClick={this.getCode}>获取小程序码</Button> */}
        <Swiper className='all'
          previousMargin='30px'
          nextMargin='30px'
          interval={10000}
          autoplay={true}
          circular={true}
          easingFunction='linear'
        >
          {
            catalog.map(item => {
              return (
                <SwiperItem className='all-item'>
                  <View className="ct-item" key={item._id} onClick={()=>this.toListPage(item.tag, item.name)}>
                    <View className='title'>{item.name}</View>
                    <ScrollView scrollY className='intro'><Text style={{whiteSpace: 'pre-line'}}>{item.intro}</Text></ScrollView>
                  </View>
                </SwiperItem>
              )
            })
          }
        </Swiper>
        <Tools />
      </View>
    )
  }

}
export default Index