import Head from 'next/head';
import Navbar from '../components/Navbar';


export default function About() {
  return (
    <>
      <styled>
      <br></br>
      <br></br>
      <br></br>
      <div class="bg-cover bg-center">
        <img src='https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full h-full
        object-cover absolute mix-blend-overlay'/>
      <h1>
          Bienvenue sur notre site vous lallez ici voir toutes ses caractéristiques.<br>
          </br>
          Ici vous serez capable de vous renseignez sur toutes nos offres en rapport avec l'univers de la science <br></br>
          Si vous êtes rêveur et que vous voulez décrocher la lune alors vous êtes au bon endroit<br></br><br></br>
          Que les étoiles vous fassent briller !!
      </h1>
      </div>
    </styled>
    </>
  )
}
