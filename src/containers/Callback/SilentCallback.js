import { useEffect } from 'react'
import userManager from '@common/utils/userManager'

export default function SilentCallback() {
  useEffect(() => {
    userManager.signinSilentCallback().then(
      (user) => {
        console.log('signin silent successfully', user)
      },
      (error) => {
        console.log('signin redirect failed', error)
      }
    )
  }, [])

  return <h1>{window.location.href}</h1>
}
