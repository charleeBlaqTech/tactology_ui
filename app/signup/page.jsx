import React from 'react'
import Signup from '@/components/Signup'
import { redirect } from 'next/navigation'

export default function page() {
    const handleRedirectToLogin = async()=>{
        "use server"
        redirect('/login')
    }
  return (
    <Signup handleRedirect={handleRedirectToLogin}/>
  )
}
