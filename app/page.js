'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"

export default function Home() {
  const [email, setEmail] = useState()
  const [paswd, setPaswd] = useState()


  const router = useRouter()


  return (
    <div>
      <form action="" onSubmit={(e) => {
        e.preventDefault()
        router.push("/home")
      }}>
        <div className="w-full flex flex-col gap-6 h-screen items-center justify-center">
          <p className="text-5xl font-bold">Log In</p>
          <div className="flex flex-col gap-4">
            <input type="email" name="email" className="focus:outline-none border-2 md:w-80 font-medium border-red-200 rounded-xl px-4 py-2 text-lg text-gray-600" required placeholder="Enter your email" defaultValue={email} onChange={(e) => { setEmail(e.target.value) }} />
            <input type="text" className="focus:outline-none border-2 md:w-80 font-medium border-red-200 rounded-xl px-4 py-2 text-lg text-gray-600" required placeholder="Enter your Password" defaultValue={paswd} onChange={(e) => { setPaswd(e.target.value) }} />
          </div>
          <div>
            <button type="submit" className="flex gap-5  items-center border-2 px-6 py-1 rounded-xl bg-red-400 cursor-pointer  text-white font-medium text-lg">
              <p>Sign up</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
