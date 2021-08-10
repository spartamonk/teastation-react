import React, { useContext, useReducer } from 'react'
import { reducer } from '../reducer/reducer'
import { NAVBAR_OPEN, NAVBAR_CLOSE } from '../actions'
const initialState = {
  isNavbarOpen: false,
}
const AppContext = React.createContext()

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const openNavbar = () => {
    dispatch({ type: NAVBAR_OPEN })
    
  }
  const closeNavbar = () => {
    dispatch({ type: NAVBAR_CLOSE })
   
  }

  return (
    <AppContext.Provider value={{ ...state, openNavbar, closeNavbar }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
