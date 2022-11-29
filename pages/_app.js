import React, { useState,useEffect } from "react"
import Layout from '../components/Layout'
import 'tailwindcss/tailwind.css'
import UserContext from '../contexts/UserContext'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())
  const [user, setUser] = useState("invité")
  const [isLogged, setLog] = useState(false)
  const [session, setSession] = useState(null)
  return (
    <UserContext.Provider value={{isLogged,setLog,user,setUser}}>
      <Layout>
      <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <Component {...pageProps} />
      </SessionContextProvider>
      </Layout>
    </UserContext.Provider>

  )
}

export default MyApp
