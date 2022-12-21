import React, { useState } from "react"
import Layout from '../components/Layout'
import 'tailwindcss/tailwind.css'
import UserContext from '../contexts/UserContext'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

function MyApp({ Component, pageProps }) {

  const [supabase] = useState(() => createBrowserSupabaseClient())
  const [user, setUser] = useState("")
  const [isLogged, setLog] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [Accentuation, setAccentuation] = useState(false)

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <UserContext.Provider value={{isLogged,setLog,user,setUser,darkMode,setDarkMode,Accentuation,setAccentuation}}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    </SessionContextProvider>
  )
}

export default MyApp
