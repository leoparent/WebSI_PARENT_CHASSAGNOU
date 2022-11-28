import Footer from "./Footer";
import Header from "./header.jsx";

export default function Layout({children}){
  return(
    <div class="">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
