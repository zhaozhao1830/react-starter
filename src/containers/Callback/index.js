/**
 * This Component is used to handle openid authentication callback
 */
import userManager from '@common/utils/userManager'
import LoadingPage from '@libs/components/LoadingPage'
import { useEffect, useCallback } from 'react'
import { message } from 'antd'
import { useHistory } from 'react-router-dom'

export { default as SilentCallback } from './SilentCallback'

export function Callback() {
  const history = useHistory()

  const onRedirectSuccess = useCallback(() => {
    history.push('/workspace/transfusion')
  }, [history])

  useEffect(() => {
    userManager
      .signinRedirectCallback()
      .then((user) => {
        onRedirectSuccess(user)
      })
      .catch((error) => {
        message.error('登录出错，请重试')
        console.error('redirect failed: ', error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <LoadingPage />
}
