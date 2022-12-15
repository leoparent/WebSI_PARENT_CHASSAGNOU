import logo from "../public/logo_dark.png"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="">
        <ul>
          <Image src={logo} />
        </ul>
        
      </div>
    </>
  )
}
