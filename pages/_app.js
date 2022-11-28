import React, { useState,useEffect } from "react"
import Layout from '../components/Layout'
import 'tailwindcss/tailwind.css'
import UserContext from '../contexts/UserContext'

function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState("invité")
  const [isLogged, setLog] = useState(false)
  const [session, setSession] = useState(null)
  return (
    <UserContext.Provider value={{isLogged,setLog,user,setUser}}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>

  )
}

export default MyApp
