import baseConfig from './base'

const HOST = ''

const ENV = 'debug'

function generateConfigs(fieldConfig) {
  const userManagerConfig = {
    authority: 'http://192.168.1.215:8082/oidcserver',
    client_id: 'danqiaoWebAppDebug',
    redirect_uri: 'http://localhost:8000/transfusion/i18n/callback',
    silent_redirect_uri: 'http://localhost:8000/transfusion/i18n/silentcallback',
    response_type: 'id_token token',
    scope: 'openid profile transfusionWebAPI',
    post_logout_redirect_uri: 'http://localhost:8000/transfusion',
    filterProtocolClaims: true,
    loadUserInfo: true,
    automaticSilentRenew: true
  }
  return { userManagerConfig }
}

const configs = {
  ...baseConfig,
  HOST,
  ENV,
  relyOnFieldConfig: (fieldConfig) => {
    Object.assign(configs, generateConfigs(fieldConfig))
  }
}

export default configs
