import { useContext } from "react";
import { useState, useCallback } from "react";
import Link from 'next/link'
import UserContext from "../contexts/UserContext"
import Image from "next/image"
import logo from "../public/logo.png"
import logo_dark from "../public/logo_dark.png"
import Login from "./Login"
import { useSession } from "@supabase/auth-helpers-react"
import Button from "./Button"

export default function Header() {
  const { darkMode, setDarkMode } = useContext(UserContext)
  const { Accentuation, setAccentuation } = useContext(UserContext)
  const session = useSession()

  const useToggle = (initialState) => {
    const [isToggled, setIsToggled] = useState(initialState);
    const toggle = useCallback(
      () => setIsToggled(state => !state),
      [setIsToggled],
    );

    return [isToggled, toggle];
  }

  const [isToggled, toggle] = useToggle(false);

  return (
    <div className={"w-full flex flex-wrap items-center justify-between mx-auto sm:px-6 dark:bg-black  md:flex md:mx-auto md:justify-between lg:flex lg:mx-auto lg:justify-between  sm:justify-start sm:space-x-10  border-b-2 dark:border-gray-800 border-gray-200 mb-10 py-6 px-3  " + Accentuation}>

      <div className="flex pl-5">
        <Link href="../" className="text-base font-medium text-gray-500">
          <Image className="rounded-full h-16 w-16" src={darkMode ? logo : logo_dark} />
        </Link>
        <div className="dark:text-white ml-8 mt-5  text-black-500 text-xl font-bold ">IA</div>
        <div className="dark:text-white mt-5  text-black-500 text-xl font-bold italic">rtist</div>
      </div>

      <div className="hidden md:block lg:space-x-20 md:space-x-8">
        <Link href="../" className="text-base font-medium text-gray-400 dark:hover:text-white hover:text-black">
          Home
        </Link>
        <Link href="/collection" className="text-base font-medium text-gray-400 dark:hover:text-white hover:text-black">
          Collection
        </Link>
        <Link href="/about" className="text-base font-medium text-gray-400 dark:hover:text-white hover:text-black">
          About us
        </Link>
      </div>

      <div className="hidden md:block">
        <Login session={session} />
      </div>

      <button onClick={toggle} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>

      {
        isToggled &&
        (
          <div className="w-full mt-5 ml-5 text-center grid grid-rows-4 lg:hidden md:hidden" id="navbar-default">
            <Link onClick={toggle} href="../" className="text-base font-medium text-gray-400 dark:hover:text-white hover:text-black">
              Home
            </Link>
            <Link onClick={toggle} href="/collection" className="text-base font-medium text-gray-400 dark:hover:text-white hover:text-black">
              Collection
            </Link>
            <Link onClick={toggle} href="/about" className="text-base font-medium text-gray-400 dark:hover:text-white hover:text-black">
              About us
            </Link>
            <div className="">
              <Login session={session} />
            </div>
            
          </div>
        )
      }

    </div>
  )
}
