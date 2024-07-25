'use client';
import React, {useRef, useState, useContext} from 'react'
import {Form, Card, Button, Alert} from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import Link from 'next/link'
import { navigate } from '../actions'


export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        try {
          let response = await login(emailRef.current.value, passwordRef.current.value)
          navigate('/dashboard/profile')
        } catch (error) {
          // Handle error
          console.error('Error logging in', error);
        }
      };
  return (
    <>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>
                Log In
            </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef}required/>
                    <Form.Label></Form.Label>
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef}required/>
                    <Form.Label></Form.Label>
                </Form.Group>
                
                <Button disabled = {loading}className='w-100' type="submit">Log In</Button>
            </Form>
            <div className='w-100  text-center mt-3'>
                <Link href="/forgot-password">Forgot password?</Link>
            </div>
        </Card.Body>
    </Card>
    <div className='w-100  text-center mt-2'>
        Need an acount? <Link href="/signup">Sign Up</Link>
    </div>
    </>
  )
}
