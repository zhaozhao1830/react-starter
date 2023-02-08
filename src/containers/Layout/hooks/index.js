/* eslint-disable import/no-extraneous-dependencies */
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { loadUserInfo } from 'actions'
import { useCallback } from 'react'

// eslint-disable-next-line import/prefer-default-export
export function useRxUser() {
  const dispatch = useDispatch()
  const { oidcUser, user } = useSelector((state) => {
    return {
      oidcUser: state.oidcUser,
      user: state.user
    }
  }, shallowEqual)

  const loadUser = useCallback(() => {
    dispatch(loadUserInfo())
  }, [dispatch])

  return {
    oidcUser,
    user,
    loadUser
  }
}
