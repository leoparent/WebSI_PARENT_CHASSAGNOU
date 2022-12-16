import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from './account'
import { useContext } from 'react'
import UserContext from '../contexts/UserContext'

const Authentification = () => {
  const session = useSession()
  const supabase = useSupabaseClient()
  const {darkMode, setDarkMode} = useContext(UserContext)

  return (
    <div className="">
      {!session ? (
        <Auth providers={['github']} supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme={darkMode ? "dark" : ""} />
      ) : (
        <Account session={session} />
      )}
    </div>
  )
}

export default Authentification;