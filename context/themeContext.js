import React, { createContext, useState, useEffect } from 'react'
import '../styles/Home.module.css'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(theme === 'dark' ? 'theme-light' : 'theme-dark')
    root.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light')
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
