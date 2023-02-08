import { useRef, useCallback } from 'react'

export default function useRefCallback(callback) {
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  return useCallback((args) => callbackRef.current(args), [])
}
