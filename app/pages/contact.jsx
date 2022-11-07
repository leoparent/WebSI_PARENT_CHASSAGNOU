import Head from 'next/head'
import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <div>
      <br></br>
      <br></br>
      <br></br>
      <div class='bg-cover bg-center'>
        
      <h1>
        voici nos chercheurs 
      <div>
            <h1>Stephan Hawqueen</h1>
            <h5>chercheur au sein du premier laboratoire Marsien et professeur particulier en physiques quantiques de Elon Mousk</h5>
            <h5>n hésitez pas à visiter sa page wikipédia ou à lui envoyer un mail</h5>
                <ul>
                    <li><Link href="https://fr.wikipedia.org/wiki/Flat_Earth_Society">Wikipédia</Link></li>
                    <li><Link href="mailto:LaTerreEstPlate@lisse.fr">mail</Link></li>

                </ul>
            <h1>Magnus Carlsen</h1>
            <h5>d abord équithérapeutique notre professeur a longtemps étudier le comportement des chevaux pour ensuite créer le jeu d échecs</h5>
            <h5>n hésitez pas à visiter ses recherches ou son classement</h5>
              <ul>
                <li><Link href="https://fr.wikipedia.org/wiki/Magnus_Carlsen">Recherches</Link></li>
               <li><Link>classement : 2856 </Link></li>

                </ul>
      </div>
      </h1>
      </div>
    </div>
    </>
  )
}
