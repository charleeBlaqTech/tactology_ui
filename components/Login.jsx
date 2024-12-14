"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login({ storeToken }) {
    const navigate = useRouter()
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    const [form, setForm] = useState({ username: '', password: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleLogin = async () => {
        try {
            setLoading(true)
            if (form.username && form.password) {
                const response = await fetch(`https://api-tactologyglobal-com.onrender.com/api/v1/auth/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(form)
                })
                if (response.status !== 200) {
                    setLoading(false)
                    throw new Error('Failded to login')
                } else {
                    const data = await response.json()
                    setLoading(false)
                    setForm({ username: '', password: '' })
                    await storeToken(data?.token)
                    return
                }
            } else {
                setLoading(null)
                setError('Please ensure to fill in all the neccessary login inputs')
                return
            }
        } catch (error) {
            setLoading(null)
            setError(error.message || "Failed to login, please contact admin")
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
                <h2 className="text-2xl font-bold text-center text-indigo-600">Login</h2>
                <p className='w-full text-center text-[11px] text-red-600'>{error || ""}</p>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            onFocus={() => setError(null)}
                            onChange={handleInputChange}
                            className="w-full h-12 text-gray-800 mt-4 px-1 border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border"
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
                            onFocus={() => setError(null)}
                            onChange={handleInputChange}
                            className="w-full h-12 text-gray-800 mt-4 px-1 border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleLogin}
                        className="w-full px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
                    >
                        {loading ? 'Sending...' : ' Login'}
                    </button>
                    <p className='w-full text-center text-gray-800'>Don't have an account? <span className='text-blue-600'><Link href={'/signup'}>Register</Link></span></p>
                </form>
            </div>
        </div>
    );
}
