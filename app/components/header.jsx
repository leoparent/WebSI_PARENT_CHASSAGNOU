import React, {useContext} from "react"

import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import {UserContext} from "../pages/UserContext"

export default function Example() {
  const {user,setUser} = useContext(UserContext)
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
          <Link href ="#">
          </Link>
          <Link href ="#">
          </Link>
          <Link href ="#">
          </Link>
          <Link href="#" >
            {user}
          </Link>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <Link href="/connect" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
          <button
         onClick={async() =>{
          const user ="invité"
           setUser(user)
                }}>
              log out 
              </button>

            </Link>
            <Link href="/connect" className="ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              <button
              >
              log in
              </button>

            </Link>
            <Link
              href="/profile"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Sign up
            </Link>
            
          </div>
        </div>
      </div>
    </Popover>
  )
}
