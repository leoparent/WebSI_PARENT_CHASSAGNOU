import { useRouter } from 'next/router'
import UserAvatar from './Gravatar'
import { useUser} from '@supabase/auth-helpers-react'
import { useEffect,useContext } from 'react'
import soleil from "../public/soleil.png"
import lune from "../public/moon-symbol.png"
import Button from "./Button"
import UserContext from "../contexts/UserContext"
import Image from 'next/image'


export default function LoggedIn({session}){
  const router = useRouter()
  const user = useUser()
  const { darkMode, setDarkMode } = useContext(UserContext)

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
      <div className='gap-2 [&_svg]:h-6 [&_svg]:w-6 items-center flex static'>
        { session ?
          <>
            <Button/>
            <div className="bg-white rounded-full">
              <button className="flex bg-center object-scale-down h-12 w-12" onClick={async () => { setDarkMode(!darkMode) }}> <Image src={darkMode ? soleil : lune} /></button>
            </div>
            <button className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6 items-center"onClick={onClick}>
              <span
                className="pl-10 hover:to-black hover:opacity-70">
              <UserAvatar email={session.user.email} size={50} />
              </span>
            </button>
          </>
          :
          <>
            <div className="bg-white rounded-full">
              <button className="flex bg-center object-scale-down h-12 w-12" onClick={async () => { setDarkMode(!darkMode) }}> <Image src={darkMode ? soleil : lune} /></button>
            </div>
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