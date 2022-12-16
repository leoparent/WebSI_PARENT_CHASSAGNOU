import React, { useContext } from "react"
import Link from 'next/link'
import UserContext from "../contexts/UserContext"
import Image from "next/image"
import logo from "../public/logo.png"
import logo_dark from "../public/logo_dark.png"
import soleil from "../public/soleil.png"
import lune from "../public/moon-symbol.png"
import Login from "./Login"
import { useSession } from "@supabase/auth-helpers-react"

export default function Header() {
  const { darkMode, setDarkMode } = useContext(UserContext)
  const session = useSession()

  return (
    <div className="mx-auto px-4 sm:px-6 dark:bg-black flex items-center justify-between border-b-2 dark:border-gray-800 border-gray-200 mb-10 py-6 md:justify-start md:space-x-10">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <Link href="../" className="text-base font-medium text-gray-500">
          <Image className="rounded-full h-16 w-16" src={darkMode ? logo : logo_dark} />
        </Link>
        <div class="dark:text-white ml-8 mt-5  text-black-500 text-xl font-bold ">IA</div>
        <div class="dark:text-white mt-5  text-black-500 text-xl font-bold italic">rtist</div>
      </div>
      <Link href="../" className="text-base font-medium text-gray-400 dark:hover:text-white hover:text-black">
        Home
      </Link>
      <Link href="/news" className="text-base font-medium text-gray-400 dark:hover:text-white hover:text-black">
        News
      </Link>
      <Link href="/collection" className="text-base font-medium text-gray-400 dark:hover:text-white hover:text-black">
        Collection
      </Link>
      <Link href="/about" className="text-base font-medium text-gray-400 dark:hover:text-white hover:text-black">
        About us
      </Link>

      <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">

        <div className="bg-white rounded-full">
          <button className="flex bg-center object-scale-down h-12 w-12" onClick={async () => { setDarkMode(!darkMode) }}> <Image src={darkMode ? soleil : lune} /></button>
        </div>
        <Login session={session} />
        
      </div>

    </div>

  )
}
