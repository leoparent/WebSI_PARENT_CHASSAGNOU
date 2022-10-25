import Head from 'next/head'

import Navbar from '../components/Navbar'



export default function About() {
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
          <div>
            Nous allons vous montrer nos planètes à vendre sur le dark système :

            <h1>fuerza 94</h1>
                <ul>
                    <li><a>système_solaire : EXV65 </a></li>
                    <li><a>type : soleil</a></li>
                    <li><a>température : 200 degré celcius</a></li>
                    <li><a>prix : 800M $</a></li>
                </ul>
            <h1>chicha94</h1>
                <ul>
                    <li><a>système_solaire : FDFI78 </a></li>
                    <li><a>type : gazeuse</a></li>
                    <li><a>température : 21 degré celcius</a></li>
                    <li><a>prix : 10M $</a></li>
                </ul>
          </div>
        </h1>
       </div>
       </div>
    </>
  )
}
