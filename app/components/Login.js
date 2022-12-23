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
      <div className="flex items-center justify-center md:justify-end"> 
        { session ?
          <div className="flex gap-32 md:gap-0 sm:gap-0 lg:gap-0" >
            
            <button className=" h-12 w-12" onClick={async () => { setDarkMode(!darkMode) }}> <Image src={darkMode ? soleil : lune} /></button>
            <Button/> 
            <button className="flex"onClick={onClick}>
              <span
                className="pl-5 hover:to-black hover:opacity-70">
              <UserAvatar email={session.user.email} size={50} />
              </span>
            </button>
            
          </div>
          :
          <>
            <button className="flex object-scale-down h-12 w-12" onClick={async () => { setDarkMode(!darkMode) }}> <Image src={darkMode ? soleil : lune} /></button>
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