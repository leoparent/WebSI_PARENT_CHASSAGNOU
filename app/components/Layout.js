import Footer from "./Footer";
import Example from "./header.jsx";

export default function Layout({children}){
  return(
    <div class="">
      <Example />
      {children}
    <Footer />
    </div>
  )
}
