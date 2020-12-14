interface catalogItem{
  _id: string,
  name: string,
  tag: string,
  intro: string
}

interface poetryItem {
  _id: string,
  author?: string,
  title?: string,
  chapter?: string,
  content?: string | Array<string>,
  tags?: string,
  section?: string,
  paragraphs?: Array<string>,
  comment?: Array<string>,
  notes?: Array<string>
}

interface requestCloudParams {
  clounFnName: string,
  controller: string,
  action: string,
  data?: object
}

enum iconType {
  none = 'none',
  success = 'success',
  loading = 'loading'
}
interface ToastParams {
  title: string,
  duration?: number,
  icon?: iconType
}

interface 诗词详情数据 {
  poetryInfo: poetryItem,
  authorInfo: 作者数据,
  tag: string
}

interface 作者数据 {
  _id: string,
  description: string,
  name: string,
  short_description: string,
  imgUrl?: string
}