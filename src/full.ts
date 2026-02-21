import type { App } from 'vue'
import './styles/index.css'

import Button from './components/Button/Button.vue'
import Input from './components/Input/Input.vue'
import Select from './components/Select/Select.vue'
import Switch from './components/Switch/Switch.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import Icon from './components/Icon/Icon.vue'
import Tooltip from './components/Tooltip/Tooltip.vue'
import Dropdown from './components/Dropdown/Dropdown.vue'
import Message from './components/Message/Message.vue'
import Alert from './components/Alert/Alert.vue'

import { createMessage } from './components/Message/method'

const components = [
  Button,
  Input,
  Select,
  Switch,
  Collapse,
  CollapseItem,
  Icon,
  Tooltip,
  Dropdown,
  Message,
  Alert
]

export const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name || '', component)
  })
}

export {
  Button,
  Input,
  Select,
  Switch,
  Collapse,
  CollapseItem,
  Icon,
  Tooltip,
  Dropdown,
  Message,
  Alert,
  createMessage
}

export * from './index'

export default {
  install
}
