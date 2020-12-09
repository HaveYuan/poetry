import Taro, { Component } from '@tarojs/taro'
import { View, Text, Block } from '@tarojs/components'
import './ListItem.scss'

type PageStateProps = {
  poetryObj: poetryItem,
	clickFn: (id: string) => void,
	tag: string
}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {
	loading: boolean
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface ListItem {
	props: IProps;
	state: PageState
}

class ListItem extends Component<PageOwnProps, PageState> {
	constructor(props) {
		super(props)
		this.state = {
			loading: true
		}
	}
	componentWillReceiveProps(nextProps) { }

	componentDidMount() {
		Taro.setNavigationBarTitle({
			title: this.$router.params.name
		});
	}

	componentDidShow() { }

	componentDidHide() { }

	render() {
		const { poetryObj, clickFn, tag } = this.props;
		console.log(tag)
		return (
			<View className='list-item' onClick={()=>clickFn(poetryObj._id)}>
				{tag === 'lunyu' && (
					<Block>
						<Text className='title'>{poetryObj.chapter}</Text>
					</Block>
				)}

				{tag === 'yuanqu' && (
					<Block>
						<Text className='title'>{poetryObj.title}</Text>
						<Text className='author'>{poetryObj.author}</Text>
					</Block>
				)}

				{tag === 'youmengying' && (
					<Block>
						<Text className='title'>{poetryObj.content}</Text>
					</Block>
				)}

				{tag === 'sishuwujing' && (
					<Block>
						<Text className='title'>{poetryObj.chapter}</Text>
						<Text className='author'>{poetryObj.tags}</Text>
					</Block>
				)}

				{tag === 'shijing' && (
					<Block>
						<Text className='title'>{poetryObj.title}</Text>
						<Text className='author'>{poetryObj.chapter}·{poetryObj.section}</Text>
					</Block>
				)}
        
      </View>
		)
	}

}
export default ListItem