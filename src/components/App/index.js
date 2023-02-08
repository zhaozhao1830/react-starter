

import moment from 'moment'
import 'moment/locale/zh-cn'

import App from './Provider'

const { ENV } = globalConfig.default


class WrapperApp extends React.Component {


  render() {
    return <App />
  }
}

export default WrapperApp
