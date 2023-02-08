import { combineReducers } from 'redux'
import { oidcReducer as oidcUser } from '@libs/redux-oidc'

export default combineReducers({ oidcUser })
