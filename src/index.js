import 'core-js'
import 'regenerator-runtime/runtime'

import App from 'components/App'
import ReactDOM from 'react-dom/client'
import '../common/styles/bootstrap.scss'
import * as echarts from 'echarts'
import theme from './configs/echarts-theme'

echarts.registerTheme('drg', theme)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
