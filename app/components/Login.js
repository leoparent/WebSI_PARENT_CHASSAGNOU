import { useRouter } from 'next/router'
import UserAvatar from './Gravatar'
import { useUser, useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import { useEffect } from 'react'
import Link from 'next/link'

export default function LoggedIn({session}){
  const router = useRouter()
  const user = useUser()

  useEffect(() => {
      [session]})
  
  function onClick() {
    if (user)
      router.push('/login')
    else
      router.push('/login')
  }
  return (
    <>
      <div className='flex gap-2 [&_svg]:h-6 [&_svg]:w-6 items-center'>
        { session ?
          <>
            <button  className="ml-8 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
              <Link href="./article">New + </Link>
            </button>
            <button className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6 items-center"onClick={onClick}>
              <span
                className="pl-10 hover:to-black hover:opacity-70">
              <UserAvatar email={session.user.email} size={50} />
              </span>
            </button>
          </>
          :
          <>
            <button className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6 items-center"onClick={onClick}>
              <span className="ml-8 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                Connect 
              </span>
            </button>
          </>
        }
      </div>
    </>
  )
}