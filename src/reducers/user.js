/* eslint-disable import/no-extraneous-dependencies */
import * as types from 'constants/action-types'

const initialState = {
  avatarUrl: '',
  realName: '',
  userId: '',
  authorized: false,
  groups: [],
  roles: []
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_USER_INFO_SUCCESS:
      return action.payload
    case types.CLEAR_USER_INFO:
      return initialState
    default:
      return state
  }
}

export default user
