import baseConfig from './base'

const _host = (window && window.location && `${window.location.protocol}//${window.location.hostname}`) || ''

const HOST = _host

const ENV = 'standalone'

export default {
  ...baseConfig,
  HOST,
  ENV
}
