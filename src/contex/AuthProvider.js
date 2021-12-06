import React, { createContext } from 'react'
import useLocalStorage from '../hook/useLocalStorage';

export const AuthContex =createContext(null)

const AuthProvider = ({children}) => {

    const allContext =useLocalStorage()
    return (
       <AuthContex.Provider value={allContext}>
           {children}
       </AuthContex.Provider>
    )
}

export default AuthProvider
