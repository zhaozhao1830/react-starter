/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware, compose } from 'redux'
import { request } from '@libs/middlewares'
import { createLogger } from 'redux-logger'
import reducers from '../reducers'

const logger = createLogger()

const createStoreWithMiddlewares = compose(applyMiddleware(request, logger))(createStore)
const store = createStoreWithMiddlewares(reducers)

export default store
