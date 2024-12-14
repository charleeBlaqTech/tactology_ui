"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Signup({handleRedirect}) {
    const navigate = useRouter()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSignup = async () => {
        try {
            setLoading(true)
            if (form.firstName && form.password && form.email && form.lastName && form.username) {
                const response = await fetch(`https://api-tactologyglobal-com.onrender.com/api/v1/users/create`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form)
                })
                const data = await response.json()
                if(response?.status !== 201){
                    setLoading(false)
                    setError(data?.message || data?.error)
                }else{
                    setLoading(false)
                    navigate.push('/login')
                }
            }else{
                setLoading(false)
                setError('Please ensure to fill in all the neccessary signup inputs')
                return
            }
        } catch (error) {
            setLoading(null)
            setError(error.message || "Failed to sighnup account, please contact admin")
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
                <h2 className="text-2xl font-bold text-center text-indigo-600">Signup</h2>
                <p className='w-full text-center text-[11px] text-red-600'>{error || ""}</p>
                <form className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div>
                            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                                First Name
                            </label>
                            <input
                                id="firstname"
                                name="firstName"
                                type="text"
                                onFocus={()=>setError(null)}
                                onChange={handleInputChange}
                                className="w-full h-10 text-gray-800 mt-4 px-1 border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                                Last Name
                            </label>
                            <input
                                id="lastname"
                                name="lastName"
                                type="text"
                                onFocus={()=>setError(null)}
                                onChange={handleInputChange}
                                className="w-full h-10 text-gray-800 mt-4 px-1 border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onFocus={()=>setError(null)}
                            onChange={handleInputChange}
                            className="w-full h-10 text-gray-800 mt-4 px-1 border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border"
                        />
                    </div>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            onFocus={()=>setError(null)}
                            onChange={handleInputChange}
                            className="w-full h-10 text-gray-800 mt-4 px-1 border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onFocus={()=>setError(null)}
                            onChange={handleInputChange}
                            className="w-full h-10 text-gray-800 mt-4 px-1 border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border"
                        />
                    </div>
                    <button
                        disabled={loading}
                        type="button"
                        onClick={handleSignup}
                        className="w-full px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
                    >
                        {loading ? 'Sending...' : 'Signup'}
                    </button>
                    <p className='w-full text-center text-gray-800'>Already have an account? <span className='text-blue-600'><Link href={'/login'}>Login</Link></span></p>
                </form>
            </div>
        </div>
    );
}