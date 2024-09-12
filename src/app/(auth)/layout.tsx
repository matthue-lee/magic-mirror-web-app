import React from 'react'
import { AuthProvider } from "../../contexts/AuthContext"



export default function LoginLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <html>
        <body>
        <AuthProvider>
        {children}
      </AuthProvider>
        </body>
      </html>


    )
}