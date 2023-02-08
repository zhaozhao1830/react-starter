/* eslint-disable import/no-extraneous-dependencies */
import { message } from 'antd'
import ProjectHeader from '@libs/components/ProjectHeader'
import userManager from '@common/utils/userManager'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useRxUser } from './hooks'

const { ENV } = globalConfig.default

export default function Layout({ children }) {
  const { isInIframe, needLogin } = fieldConfig.product
  const { oidcUser, user, loadUser } = useRxUser()
  const { pathname } = useLocation()
  const deptType = /^\/workspace\/(\w+)($|\/|\?|#)/.exec(pathname)[1]

  useEffect(() => {
    if (deptType !== 'transfusion' || !needLogin) {
      return
    }

    if (oidcUser.accessToken) {
      return
    }

    if (ENV === 'debug') {
      message.error('请登录')
    } else if (ENV === 'production') {
      window.open('/transfusion', '_self')
    }
  }, [oidcUser, needLogin, deptType])

  useEffect(() => {
    if (oidcUser.accessToken && !user.userId) {
      loadUser()
    }
  }, [oidcUser, user, loadUser])

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {isInIframe ? null : <ProjectHeader userManager={userManager} />}
      {children}
    </div>
  )
}
