import React, { useState } from "react"
import Layout from '../components/Layout'
import 'tailwindcss/tailwind.css'
import UserContext from '../contexts/UserContext'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { createClient } from "@supabase/supabase-js"

function MyApp({ Component, pageProps }) {

  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL , process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
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
