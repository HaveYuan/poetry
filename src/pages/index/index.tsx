import Taro, { Component, Config } from '@tarojs/taro'
import { View, Swiper, SwiperItem, ScrollView, Text, Button, Image } from '@tarojs/components'
import { requestCloud } from '@/utils/cloudFn';
import showToast from '@/utils/showToast';
import Tools from '@/components/Tools/Tools';
import './index.scss'

type PageStateProps = {}

type PageDispatchProps = {}

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
      fileID: 'cloud://test-hhh.7465-test-hhh-1304398770/poetry/images/bg.jpg',
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
      path: '/pages/index/index',
    }
  }

  config: Config = {
    navigationStyle: 'custom'
  }

  getallTags = () => {
    requestCloud(
      {
        clounFnName: 'poetry', 
        controller: 'poetry', 
        action: 'allCategories'
      }
    ).then((res:any) => {
      if(res.code === 0) {
        this.setState({
          catalog: res.data
        })
      }else {
        showToast({title:res.errMsg})
      }
    }).catch(_ => {
      showToast({title:'网络异常'})
    })
  }

  toListPage = (tag, name) => {
    Taro.navigateTo({
      url: `/pages/poetryList/poetryList?tag=${tag}&name=${name}`
    });
  }

  getCode=()=> {
    requestCloud({
      clounFnName: 'poetry', 
      controller: 'poetry', 
      action: 'getCode',
      data: {
        scene: encodeURIComponent('from=code'),
        page: 'pages/index/index'
      }
    }).then((res:any) => {
      if(res.code === 0) {
        console.log(res)
        const arrayBuffer = new Uint8Array(res.buffer.data)
        const base64 = "data:image/png;base64,"+Taro.arrayBufferToBase64(arrayBuffer)
        console.log(base64)
        this.setState({
          imgUrl: base64
        })
      }else {
        showToast({title:res.errMsg})
      }
    }).catch(_ => {
      showToast({title:'网络异常'})
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