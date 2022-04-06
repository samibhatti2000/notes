import React from 'react'
import { Navigate } from 'react-router-dom'
import { Route } from 'react-router-dom'

const ProtectedRoute = ({element:element, ...rest}) => {
    const token = window.localStorage.getItem('token')
  return (
      <>
    <Route
        {...rest}
        render={(props)=>{
            if(!token){
              return <Navigate replace to="/admin/login" />;

            }
            return <element {...props} />;

        }}
    />
    </>
  )
}

export default ProtectedRoute