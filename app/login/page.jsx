import React from 'react'
import Login from '@/components/Login'
import { setCookie } from '@/utilities/cookie.mgt'
import { redirect } from 'next/navigation'

export default function page() {
    const handleUser_store_token = async (access_token)=>{
        "use server"
        setCookie('token', access_token)
        redirect('/departments?tab=grid')
    }
  return (
    <Login storeToken={handleUser_store_token}/>
  )
}
