'use client'
 
import React from 'react'
import dynamic from 'next/dynamic'
 
const App = dynamic(() => import('../../App'), { ssr: false })
 
export function ClientOnly() {
  return<>
  <div>
    Hellow world
  </div>
  <div>
  <App />
  </div>
  </>
}   