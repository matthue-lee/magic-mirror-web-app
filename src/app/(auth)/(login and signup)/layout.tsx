import React from 'react'
import { AuthProvider } from "../../../contexts/AuthContext"
// import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap'



export default function LoginLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
         <div className="w-100" style={{ maxWidth: "400px" }}>
            {children}
        </div>
        </Container>

    )
}