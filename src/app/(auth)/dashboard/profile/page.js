'use client'
import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useAuth } from '../../../../contexts/AuthContext'
import Link from 'next/link'
import { Container } from "react-bootstrap"

export default function page() {

  const [error, setError] = useState("")
  const {currentUser, logout } = useAuth()

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
    <div class="col w-25 p-3 justify-content-center">        
    <Card>
      <Card.Body>
        <h2 className='text-center mb-4'>Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Email:</strong> {currentUser.email}
        <Link href='update-profile' className="btn btn-primary w-100 mt-3">
          Update Profile
        </Link>
      </Card.Body>
    </Card>
    <div className='w-100  text-center mt-2'>
        <Button variant="link" onClick={ handleLogout }>Log Out</Button>
    </div>
    </div>
  )
}
