import { useRouter } from 'next/router'
import UserAvatar from './Gravatar'
import { useUser, useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import { useEffect } from 'react'

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
    <button
      className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6"
      onClick={onClick}
    >
      { session ?
        <>
          <span
            className="pl-10 hover:to-black hover:opacity-70">
            <UserAvatar email={session.user.email} size={50} />
          </span>
        </>
        :
        <>
          <span
            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
          Connect </span>
        </>
      }
    </button>
  )
}