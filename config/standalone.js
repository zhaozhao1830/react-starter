import baseConfig from './base'

const _host = (window && window.location && `${window.location.protocol}//${window.location.hostname}`) || ''

const HOST = window.location.origin

const ENV = 'standalone'

function generateConfigs(fieldConfig) {
  /**
    OPENREFINE_HOST_PORT: 22222
  */
  const { OIDC_SERVER_HOST_PORT = '' } = fieldConfig.product

  const OIDC_SERVER_HOST_ORIGIN = OIDC_SERVER_HOST_PORT ? `${_host}:${OIDC_SERVER_HOST_PORT}` : HOST

  const userManagerConfig = {
    authority: `${OIDC_SERVER_HOST_ORIGIN}/oidcserver`,
    client_id: 'danqiaoWebAppStandalone',
    redirect_uri: `${HOST}/transfusion/i18n/callback`,
    silent_redirect_uri: `${HOST}/transfusion/i18n/silentcallback`,
    response_type: 'id_token token',
    scope: 'openid profile transfusionWebAPI',
    post_logout_redirect_uri: `${HOST}/transfusion`,
    filterProtocolClaims: true,
    loadUserInfo: false,
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
