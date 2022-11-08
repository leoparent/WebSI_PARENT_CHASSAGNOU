
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <div class='bg-cover bg-center mx-14 flex flex-col min-h-screen'>

          <h1>
            Voici notre équipe : <br></br> <br></br>
            <div>
              <h1>- Stephan Hawqueen</h1>
              <h5>Chercheur au sein du premier laboratoire Marsien et professeur particulier en physiques quantiques de Elon Mousk</h5>
              <h5>N'hésitez pas à visiter sa page wikipédia ou à lui envoyer un mail</h5>
              <ul>
                <li><a href="https://fr.wikipedia.org/wiki/Flat_Earth_Society">Wikipédia</a></li>
                <li><a href="mailto:LaTerreEstPlate@lisse.fr">mail</a></li>

              </ul>
              <h1>- Magnus Carlsen</h1>
              <h5>D'abord équithérapeutique notre professeur a longtemps étudier le comportement des chevaux pour ensuite créer le jeu d échecs</h5>
              <h5>N'hésitez pas à visiter ses recherches ou son classement</h5>
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
