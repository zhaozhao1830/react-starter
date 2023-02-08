import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import Layout from 'containers/Layout'

const PatientList = lazy(() => import(/* webpackChunkName: 'patientList' */ 'containers/PatientList'))
const Workspace = lazy(() =>
  import(/* webpackChunkName: 'workspace' */ /* webpackPrefetch: true */ 'containers/Workspace')
)

function RouteConfigs() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (['/drgs', '/drgs/'].includes(location.pathname)) {
      navigate('/drgs/plist', { replace: true })
    }
  }, [location, navigate])

  return (
    <Suspense fallback='加载中...'>
      <Routes>
        <Route element={<Layout />}>
          <Route path='plist' element={<PatientList />} />
          <Route path='workspace' element={<Workspace />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default function RouterWrapper() {
  useEffect(() => {
    if (location.pathname === '/') {
      window.open('/drgs/plist', '_self')
    }
  }, [])

  return (
    <BrowserRouter basename='/drgs'>
      <RouteConfigs />
    </BrowserRouter>
  )
}
