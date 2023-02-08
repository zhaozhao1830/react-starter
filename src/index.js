/* eslint-disable no-shadow */
import 'core-js'
import 'regenerator-runtime/runtime'

import ReactDOM from 'react-dom'
import '../common/styles/bootstrap.scss'
import 'antd/dist/antd.less'
import AfterConfigRender from '@libs/modules/AfterConfigRender'

ReactDOM.render(<AfterConfigRender appCode='pbm' />, document.getElementById('root'))
