import { authApiPrefix, apiPrefix } from 'configs'
import myfetch from '@libs/utils/myfetch'
import 'whatwg-fetch'

const { HOST } = globalConfig.default

export const errorCode = {
  OK: '000000'
}

export const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp.json().then((res) => {
      if (!res.status || res.status.code === errorCode.OK) {
        return res
      }
      throw Error(resp.status.code)
    })
  }
  throw new Error(`${resp.status} ${resp.statusText}`)
}

// eslint-disable-next-line import/prefer-default-export
export async function loadUserInfo(token) {
  const response = await fetch(`${HOST}${authApiPrefix}/user/?application=transfusion`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  return checkStatus(response)
}
