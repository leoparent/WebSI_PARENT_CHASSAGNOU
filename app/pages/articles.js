import Head from 'next/head'

import Navbar from '../components/Navbar'
export const getStaticProps = async() => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data=await res.json();
  return{
    props : {articles: data }
    }
  
}


const Articles = ({articles}) => {
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
            <h1>All articles</h1>
            {articles.map(article => (
              <div key={article.id}>
                <a>
                  <h3>{article.name}</h3>
                </a>
                </div>
            ))}
          </div>
        </h1>
       </div>
       </div>
    </>
  )
}
export default Articles;