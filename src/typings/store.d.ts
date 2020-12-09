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
  content?: string,
  tags?: string,
  section?: string
}