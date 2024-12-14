import React from 'react'
import Departments from '@/components/departments/Departments'
import { getCookie } from '@/utilities/cookie.mgt'

export default async function page() {
  const currentUserToken = await getCookie('token')
  return (
    <>
      {
        currentUserToken && <Departments token={currentUserToken} />
      }

    </>
  )
}
