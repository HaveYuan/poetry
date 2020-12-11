import Taro, { Component, Config } from '@tarojs/taro'
import { View, Swiper, SwiperItem } from '@tarojs/components'
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
  bgUrl: string
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
      bgUrl: ''
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

  render() {
    const { bgUrl, barHeight, catalog } = this.state;
    return (
      <View className='Index' style={{backgroundImage: 'url('+bgUrl+')'}}>
        <View className="index-title" style={{top:barHeight+'px'}}>诗词大全</View>
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
                    <View className='intro'>{item.intro}</View>
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