import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import showToast from '@/utils/showToast';
import logApi from '@/utils/log';
import "./Play.scss";

type PageStateProps = {
  content: Array<string> | string | undefined
};

type PageDispatchProps = {};

type PageOwnProps = {};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface Play {
  props: IProps,
  state: PageState
}

const plugin = requirePlugin("WechatSI"); // 微信同声传译插件
const innerAudioContext = Taro.createInnerAudioContext();

class Play extends Component<PageOwnProps, PageState> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillReceiveProps(nextProps) { }

  componentWillUnmount() { 
    innerAudioContext.stop();
  }

  playPoetry = (content) => {// 播放语音功能
    let str = '';

    if(typeof(content) === 'string') {
      str = content;
    } else  {
      content.map(item => {
        str = str + item;
      })
    }

    plugin.textToSpeech({
      lang: "zh_CN",
      tts: true,
      content: str,
      success: res => {
        console.log("succ tts", res.filename);
        showToast({title: '读音为合成音，仅作参考'})
        innerAudioContext.src = res.filename;
        innerAudioContext.play();
        logApi('detail_page', {
          action: '点击朗读',
          poetry: str
        })
      },
      fail: function(res) {
        console.log("fail tts", res)
        showToast({title: '朗读失败'})
      }
  })
  }

  render() {
    const { content } = this.props;
    return (
      <View className="Play" onClick={()=>this.playPoetry(content)}></View>
    );
  }
}
export default Play;
