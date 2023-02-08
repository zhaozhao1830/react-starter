import { BrowserRouter, Route } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'

import { Callback, SilentCallback } from '../containers/Callback'

const Layout = lazy(() => import(/* webpackChunkName: 'layout' */ 'containers/Layout'))
const TransDept = lazy(() => import(/* webpackChunkName: 'transDept' */ 'containers/TransDept'))
const ClinicalDept = lazy(() => import(/* webpackChunkName: 'clinicalDept' */ 'containers/Workspace_test'))

export default function Router() {
  useEffect(() => {
    if (location.pathname === '/') {
      window.open('/transfusion/i18n/workspace/transfusion', '_self')
    }
  }, [])

  return (
    <BrowserRouter basename='/transfusion/i18n'>
      <Suspense fallback='加载中...'>
        <Route path='/callback' component={Callback} />
        <Route path='/silentcallback' component={SilentCallback} />
        <Route
          path='/workspace'
          render={() => {
            return (
              <Layout>
                <Route path='/workspace/transfusion' component={TransDept} />
                <Route path='/workspace/clinical' component={ClinicalDept} />
                {/* <Route path='/workspace/outpatient' component={ClinicalDept} /> */}
                {/* <Route path='/workspace/manual' component={ClinicalDept} /> */}
              </Layout>
            )
          }}
        />
      </Suspense>
    </BrowserRouter>
  )
}
