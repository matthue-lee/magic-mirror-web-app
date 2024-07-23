import React from 'react'
import { Button } from "react-bootstrap"
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase'

export default function LinkedAccounts() {

  const handleGoogle = async (e) => {
    const provider = await new GoogleAuthProvider()
    return signInWithPopup(auth, provider)

  }
  return (
    <>
    <div>
        <Button onClick = {handleGoogle} className='w-100' type="submit">Link your Google Account</Button>
    </div>
    </>
  )
}
