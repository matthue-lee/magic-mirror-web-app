import React from 'react'
import SideNav from '../../components/sidenav'
import '../styles/globals.css'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html>
        <body>
        <SideNav/>

        </body>
    </html>

  )
}