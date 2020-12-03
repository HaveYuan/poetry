import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './poetryList.scss'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {
	name: string
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface poetryList {
	props: IProps;
	state: PageState
}

class poetryList extends Component<PageOwnProps, PageState> {
	constructor(props) {
		super(props)
		this.state = {
			name: '小红'
		}
	}
	componentWillReceiveProps(nextProps) { }

	componentWillUnmount() { }

	componentDidShow() { }

	componentDidHide() { }

	render() {
		return (
			<View className='poetryList'>
				<Text>hello world</Text>
			</View>
		)
	}

}
export default poetryList