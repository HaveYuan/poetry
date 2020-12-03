import Taro, { Component } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'
import { requestCloud } from '@/utils/cloudFn';
import bg from '@/images/bg.jpg';
import './index.scss'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {
  barHeight: number,
  catalog: Array<catalogItem>
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
  state: PageState
}

class Index extends Component<PageOwnProps, PageState> {
  constructor(props) {
    super(props)
    this.state = {
      barHeight: 0,
      catalog: []
    }
  }
  componentWillReceiveProps(nextProps) { }

  componentWillUnmount() { }

  componentDidMount() {
    const barStatus = Taro.getMenuButtonBoundingClientRect()
    Taro.getSystemInfo({
      success: _ => {
        this.setState({
          barHeight: barStatus.top
        })
      }
    })

    this.getallTags();
  }

  componentDidShow() { }

  componentDidHide() { }

  config: Config = {
    navigationStyle: 'custom'
  }

  getallTags() {
    requestCloud(
      {
        clounFnName: 'poetry', 
        controller: 'poetry', 
        action: 'allCategories'
      }
    ).then(res => {
      if(res.code === 0) {
        this.setState({
          catalog: res.data
        })
      }
    }).catch(err => {

    })
  }

  render() {
    const { barHeight, catalog } = this.state;
    return (
      <View className='Index'>
        <View className="index-title" style={{top:barHeight+'px'}}>诗词大全</View>
        <Image src={bg} mode="widthFix" className='title-bg'></Image>
        {/* {catalog.map(item => {
          return <View key={item._id} data-name={item.tag} >{item.name}</View>
        })} */}
        <Swiper className='all'>
          <SwiperItem >
            <View className="ct-item">
              
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className="ct-item">
              
            </View>
          </SwiperItem>
        </Swiper>
      </View>
    )
  }

}
export default Index