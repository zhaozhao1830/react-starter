/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux'
import { oidcReducer as oidcUser } from '@libs/redux-oidc'
import user from './user'

export default combineReducers({ oidcUser, user })
