"use server"

import { cookies } from 'next/headers'; // For App Router
import { serialize } from 'cookie'; // For setting headers manually if needed

// Set a cookie
export async function setCookie(name, value) {
  const cookieStore = cookies();

  // Options: e.g., { maxAge: 3600, httpOnly: true, path: '/' }
  const defaultOptions = {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  };

  cookieStore.set(name, value, { ...defaultOptions, maxAge: 3600});
  return
}

// Delete a cookie
export async function deleteCookie(name) {
  const cookieStore = cookies();
  cookieStore.delete(name);
  return
}

// Get a cookie
export async function getCookie(name) {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value || null;
}