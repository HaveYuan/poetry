import Taro, { Component, Config } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import './Search.scss'

type PageStateProps = {
  searchFn?: (e:object)=>void,
  searchInput?: (e:object)=>void,
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
 let time:ReturnType<typeof setTimeout>;
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
    searchFn && searchFn(e)
  }

  searchContentInput(e) {
    const { searchInput } = this.props;
    

    if(time) {
      clearTimeout(time);
      time = setTimeout(_ => {
        searchInput && searchInput(e);
      }, 500)
    }else {
      time = setTimeout(_ => {
        searchInput && searchInput(e);
      }, 500)
    }


  }

  render() {
    const { placeholder } = this.props;
    return (
      <View className='Search'>
        <View className='search-icon'></View>
        <Input className='search-input' confirmType='search' placeholder={placeholder} onBlur={this.searchContent} onInput={this.searchContentInput} />
      </View>
    )
  }

}
export default Search