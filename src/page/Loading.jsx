import React, { useEffect } from 'react'

export default function Loading({ setLoading }) {
  useEffect(() => {
    const loadingHandler = setTimeout(() => {
      setLoading()
    }, 1000)

    return () => {
      clearTimeout(loadingHandler)
    }
  }, [setLoading])

  return <div>Loading 중입니다. 잠시만 기다려주세요.</div>
}
