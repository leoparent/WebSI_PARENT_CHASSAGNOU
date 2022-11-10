import React, {useState,useMemo} from "react"
import Layout from '../components/Layout'
import 'tailwindcss/tailwind.css'
import { UserContext } from './UserContext'

function MyApp({ Component, pageProps }) {
  const [user,setUser] = useState("invité")
  const value =useMemo(()=> ({user,setUser}),[user,setUser])

  return(
    <UserContext.Provider value={value}>   
    <Layout>
    <Component {...pageProps} /> 
    </Layout>
    </UserContext.Provider>

  ) 
}

export default MyApp
