
export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: { articles: data }
  }

}


const Articles = ({ articles }) => {
  return (
    <>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <div class="bg-cover bg-center mx-14 flex flex-col min-h-screen">

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