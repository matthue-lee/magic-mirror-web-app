'use client'
import React, { useState, Alert} from 'react'
import { Card, Button } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom'
import { Container } from "react-bootstrap"

export default function Dashboard() {

  const [error, setError] = useState("")
  const {currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout(){
    setError('')
    try{
      await logout()
      navigate('/login')
    }
    catch{
      setError('Failed to log out')
    }
  }
  return (
    <>
    <Container classname='align-items-left justify-content-left'>
    <div class='row'>
    <div class= "col" style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              Home
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Profile</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/linked-accounts" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Linked Accounts</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/analytics" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
              </NavLink>

              <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              style={{
                padding: '20px 5px',
              }}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
    </div> 
    
    
    <div class="col w-25 p-3 justify-content-center">        
    <Card>
      <Card.Body>
        <h2 className='text-center mb-4'>Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Email:</strong> {currentUser.email}
        <Link to='update-profile' className="btn btn-primary w-100 mt-3">
          Update Profile
        </Link>
      </Card.Body>
    </Card>
    <div className='w-100  text-center mt-2'>
        <Button variant="link" onClick={ handleLogout }>Log Out</Button>
    </div>
    </div>


    </div>
    </Container>
    </> 
  )
}
