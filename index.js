import { app } from 'hyperapp'

import state from './state'
import actions from './actions'

import App from './components/App'

app(
  state,
  actions,
  App,
  document.getElementById('app')
)
