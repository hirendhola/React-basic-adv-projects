import React from 'react'
import useLocalStorage from './useLocalStorage'

function Theme() {
    const  [theme, setTheme] = useLocalStorage('theme', 'dark')
  return (
    <div>Theme</div>
  )
}

export default Theme