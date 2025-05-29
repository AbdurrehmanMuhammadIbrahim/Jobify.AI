import React, { ReactNode } from 'react'

const AuthLayout = ({children}:{childern : ReactNode}) => {
  return (
    <div className="auth-layout">{children}</div>
  )
}

export default AuthLayout
