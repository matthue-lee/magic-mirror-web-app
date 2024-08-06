import React from 'react'
import { AuthProvider } from "../../contexts/AuthContext"
import "bootstrap/dist/css/bootstrap.min.css"

export default function LoginLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <AuthProvider>

            
         <div className="w-100" style={{ maxWidth: "400px" }}>
            {children}
        </div>

      </AuthProvider>

    )
}