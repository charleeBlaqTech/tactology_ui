import Image from "next/image";
import Link from "next/link";
export default async function Home() {
  const response = await fetch(`https://api-tactologyglobal-com.onrender.com/api/v1/welcome_note`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const data = await response.json()
  return (
    <>
      {
        data &&
        <div className="w-full h-screen py-24 px-14 grid place-content-center">
          <div className="w-full flex flex-col items-center justify-center">
            <p className="w-full text-lg text-center text-blue-500">{data.welcome}</p>
            <p className="w-full text-lg text-center text-blue-500">{data.developer}</p>
            <p className="w-full text-lg text-center text-blue-500">{data.TECK_STACK}</p>
            <p className="w-full text-lg text-center text-blue-500">Start Date    {data.start_date}</p>
            <p className="w-full text-lg text-center text-blue-500">End Date      {data.due_date}</p>
            <p className="w-full text-lg text-center text-blue-500">{data.client}</p>
          </div>
          <div className="w-full mt-6 flex items-center justify-center">
          <p className='w-full text-center text-gray-800'>Click Link to login <span className='text-blue-600 underline'><Link href={'/login'}>Login</Link></span></p>
          </div>
        </div>
      }
    </>
  );
}
