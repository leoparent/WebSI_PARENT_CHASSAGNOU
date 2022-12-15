import React, { useContext } from "react"
import Link from 'next/link'
import UserContext from "../contexts/UserContext"
import Image from "next/image"
import logo from "../public/logo.png"
import logo_dark from "../public/logo_dark.png"
import soleil from "../public/soleil.png"
import lune from "../public/moon-symbol.png"

export default function Header() {
  const { user, setUser } = useContext(UserContext)
  const { isLogged, setLog } = useContext(UserContext)
  const { darkMode, setDarkMode } = useContext(UserContext)

  return (
    <div className="mx-auto px-4 sm:px-6 dark:bg-black flex items-center justify-between border-b-2 dark:border-gray-800 border-gray-200 mb-10 py-6 md:justify-start md:space-x-10">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <Link href="../" className="text-base font-medium text-gray-500">
          <Image className="rounded-full h-16 w-16" src={darkMode ? logo : logo_dark} />
        </Link>
        <text className='dark:text-white ml-8 mt-5 text-base font-bold text-black-500'> IArtist </text>
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
          <button className="flex bg-center object-scale-down h-12 w-12" onClick={async () => { setDarkMode(!darkMode) }}> <Image src={darkMode ? soleil : lune}/></button>
        </div>

        {(isLogged && (
          <>
            <Link href="../" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-red-500">
              <button
                onClick={async () => {
                  setUser("invité")
                  setLog(false)
                }}>
                Log out
              </button>
            </Link>
            <div className="flex items-center">
              <p className="px-5 ">{user}</p>
              <Link href="#" className="text-base font-medium text-gray-400 hover:text-gray-900 flex items-center" >
                <img className="h-16 w-16" src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-account-circle_89831.png" />
              </Link>
            </div>

          </>
        )) || (
            <>
              <Link href="/connect" className="ml-8 whitespace-nowrap text-base font-medium text-gray-400 dark:hover:text-white hover:text-black">
                <button className="">
                  Log in
                </button>

              </Link>
              <Link
                href="/profile"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Sign up
              </Link>
            </>
          )}

      </div>

    </div>

  )
}
