import Head from 'next/head'
import Navbar from '../components/Navbar'


export default function Contact() {
  return (
    <>
      <div>
      <br></br>
      <br></br>
      <br></br>
      <div class="bg-cover bg-center">
        <img src='https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full h-full
        object-cover absolute mix-blend-overlay'/>
      <h1>
        voici nos chercheurs 
      <div>
            <h1>Stephan Hawqueen</h1>
            <p>chercheur au sein du premier laboratoire Marsien et professeur particulier en physiques quantiques de Elon Mousk</p>
            <p>n'hésitez pas à visiter sa page wikipédia ou à lui envoyer un mail</p>
                <ul>
                    <li><a href="https://fr.wikipedia.org/wiki/Flat_Earth_Society">Wikipédia</a></li>
                    <li><a href="mailto:LaTerreEstPlate@lisse.fr">mail</a></li>

                </ul>
            <h1>Magnus Carlsen</h1>
            <p>d'abord équithérapeutique notre professeur a longtemps étudier le comportement des chevaux pour ensuite créer le jeu d'échecs</p>
            <p>n'hésitez pas à visiter ses recherches ou son classement</p>
              <ul>
                <li><a href="https://fr.wikipedia.org/wiki/Magnus_Carlsen">Recherches</a></li>
               <li><a>classement : 2856 </a></li>

                </ul>
      </div>
      </h1>
      </div>
    </div>
    </>
  )
}
