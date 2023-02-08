/* eslint-disable import/no-extraneous-dependencies */
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import store from 'store'
import { Provider } from 'react-redux'
import Routes from 'Routes'
import 'moment/locale/zh-cn'

moment.locale('zh-cn')

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <Routes />
      </ConfigProvider>
    </Provider>
  )
}

export default App
