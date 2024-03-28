import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, useLocation } from 'react-router-dom'

function PrivateRoute({ children, ...rest }) {
   const isUserSuccessfullyLoggedIn = useSelector(({ auth }) => auth.isLoggedIn)

   const location = useLocation()

   return (
      <Route
         {...rest}
         render={() => {
            if (true === true) {
               return children // Show the protected content
            } else if (
               isUserSuccessfullyLoggedIn === false ||
               isUserSuccessfullyLoggedIn === null
            ) {
               return (
                  <Navigate
                     to={{
                        pathname: '/login',
                        state: { from: location },
                     }}
                  />
               ) // Redirect to login page
            } else {
               return null // Show blank screen while waiting for authentication status
            }
         }}
      />
   )
}

export default PrivateRoute
