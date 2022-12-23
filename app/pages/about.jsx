import timeline from "../public/timeline.png"
import timeline_blanc from "../public/timeline_blanc.png"
import Image from "next/image"
import UserContext from "../contexts/UserContext"
import { useContext } from "react"

export default function About(){

  const { darkMode, setDarkMode } = useContext(UserContext)

  return (

    <>
      <div className="mx-10 w-auto">
        <Image src={darkMode ? timeline : timeline_blanc} />
      </div>
      
    </>
        
  )
}
