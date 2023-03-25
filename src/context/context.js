import React from 'react'

const ThemeContext = React.createContext({
  lightMode: true,
  changeMode: () => {},
})

export default ThemeContext
