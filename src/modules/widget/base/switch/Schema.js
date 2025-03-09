import { FormSchema } from '../../../schema'

export default class SwitchSchema extends FormSchema {
  constructor (props) {
    super()
    this.type = 'boolean'
    this.title = '开关'
    this.placeholder = '请输入'
    this.option = {
      open: '是',
      close: '否'
    }
    this.create(props)
  }
}

// 静态配置，同类widget公有
Object.assign(SwitchSchema, {
  title: '开关',
  widget: 'switch',
  icon: 'toggle',
  type: 'boolean',
  validators: [],
  logic: {
    value: ['=', '!='],
    // event: ['change']
    event: []
  }
})
