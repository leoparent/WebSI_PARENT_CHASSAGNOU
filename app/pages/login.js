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
    <div className="mx-auto">
      {!session ? (
        <div className='mx-auto w-1/2'> 
          <Auth providers={['github']} supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme={darkMode ? "dark" : ""} />
        </div>
      ) : (
        <Account session={session} />
      )}
    </div>
  )
}

export default Authentification;