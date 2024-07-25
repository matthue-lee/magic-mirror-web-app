'use client';
import React, { useRef } from 'react'
import {Form, Card, Button, Alert} from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const router = useRouter()




    const handleSubmit = async (event) => {
        event.preventDefault();  
        try {
          await signup(emailRef.current.value, passwordRef.current.value)
        //   alert(`success`)
          router.push('/dashboard/profile')
        } catch (error) {
          // Handle error
          console.error('Error submitting form:', error);
        }
      };

  return (
    <>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>
                Sign Up
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
                <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef}required/>
                    <Form.Label></Form.Label>
                </Form.Group>
                <Button disabled = {loading}className='w-100' type="submit">Sign Up</Button>
            </Form>
        </Card.Body>
    </Card>
    <div className='w-100  text-center mt-2'>
        Already have an acount? <Link href="/login">Log In</Link>
    </div>
    </>
  )
}
