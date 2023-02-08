import { authApiPrefix, apiPrefix } from 'configs'
import { checkStatus } from 'actions/action-helper'
import myfetch from '@libs/utils/myfetch'
import 'whatwg-fetch'

export {
  getFormData,
  savePreSummary,
  changePreSummaryStatus,
  getFormConfig,
  getPostOpSummaryRecord,
  deletePostOpSummaryRecord
} from './form'
export { getOpRiskData } from './opRisk'

const { HOST, AUTH_HOST } = globalConfig.default

/** 获取全局配置 */
export async function loadConfigs() {
  const response = await myfetch({
    url: `${HOST}${apiPrefix}/web/config/configs`
  })
  return response.data || []
}
