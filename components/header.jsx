import React, { useContext} from "react"
import { Popover } from '@headlessui/react'
import Link from 'next/link'
import UserContext from "../contexts/UserContext"

export default function Header() {
  const { user, setUser } = useContext(UserContext)
  const {isLogged,setLog} = useContext(UserContext)

  return (
    <Popover className="bg-white w-screen">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="../" className="text-base font-medium text-gray-500 hover:text-gray-900">
              <img className=" h-16 w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTps-y4hpmoZOjA4366L0PXH467CTUUSBjN1w&usqp=CAU" alt="" />
            </Link>
            <text className='ml-8 mt-5 text-base font-bold font-sans  text-black-500 hover:text-gray-900'> SWILD</text>
          </div>
          <Link href="../" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Galerie
          </Link>
          <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Contacts
          </Link>
          <Link href="/articles" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Categories
          </Link>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            {( isLogged && (
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
                  <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900 flex items-center" >
                    <img className="h-16 w-16" src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-account-circle_89831.png" />
                  </Link>
                </div>

              </>
            )) || (
                <>
                  <Link href="/connect" className="ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
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
      </div>
    </Popover>
  )
}
