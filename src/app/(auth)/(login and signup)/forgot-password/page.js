'use client'

import React, {useRef, useState} from 'react'
import {Form, Card, Button, Alert} from 'react-bootstrap'
import { useAuth } from '../../../../contexts/AuthContext'
import Link from 'next/link'


export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [ message, setMessage] = useState()

    async function handleSubmit(e){
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')

        }
        catch{
            setError('Unable to reset password')
        }
        setLoading(false)
    }

  return (
    <>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>
                Reset Password
            </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef}required/>
                    <Form.Label></Form.Label>
                </Form.Group>             
                <Button disabled = {loading} className='w-100' type="submit">Reset Password</Button>
            </Form>
            <div className='w-100  text-center mt-3'>
                <Link href="/login">Login</Link>
            </div>
        </Card.Body>
    </Card>
    <div className='w-100  text-center mt-2'>
        Need an acount? <Link href="/signup">Sign Up</Link>
    </div>
    </>
  )
}
