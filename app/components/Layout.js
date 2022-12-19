import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import Footer from "./Footer";
import Header from "./header.jsx";

export default function Layout({children}){

  const {darkMode, setDarkMode}= useContext(UserContext)

  return(
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-black">
        <Header />
        <div className="py-10 min-h-screen">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}
