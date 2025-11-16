import React from 'react'
import { useAuth } from './context/useAuth'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const {isLoggedIn} = useAuth()
  return isLoggedIn ? children : <Navigate to="/signin" replace/>
}

export default ProtectedRoute
