import Taro, { Component, Config } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import { requestCloud } from '@/utils/cloudFn'
import showToast from '@/utils/showToast';
import './Search.scss'

type PageStateProps = {
  searchFn: (e:object)=>void,
  placeholder: string
}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {

}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Search {
  props: IProps;
  state: PageState
}

class Search extends Component<IProps, PageState> {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentWillReceiveProps(nextProps) { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  config: Config = {
    navigationBarTitleText: '搜索'
  }

  searchContent(e) {
    const { searchFn } = this.props;
    searchFn(e)
  }

  render() {
    const { placeholder } = this.props;
    return (
      <View className='Search'>
        <View className='search-icon'></View>
        <Input className='search-input' confirmType='search' placeholder={placeholder} onBlur={this.searchContent} />
      </View>
    )
  }

}
export default Search