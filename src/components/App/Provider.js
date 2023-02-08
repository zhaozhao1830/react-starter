/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { ConfigProvider } from 'antd'
import store from 'store'
import { Provider } from 'react-redux'
import Routes from 'Routes'
import { OidcProvider } from '@libs/react16/redux-oidc'
import userManager from '@common/utils/userManager'

import zhCN from 'antd/es/locale/zh_CN'

function App({ locale, intl }) {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <OidcProvider store={store} userManager={userManager}>
          <Routes />
        </OidcProvider>
      </ConfigProvider>
    </Provider>
  )
}

export default App
