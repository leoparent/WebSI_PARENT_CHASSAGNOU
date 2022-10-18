import Head from 'next/head'
import styled from 'styled-components';
import Footer from '../components/Footer';

const Hero=styled.div`
background: #fff;
height:90vh;
display: flex ;
justify-content:center
align-items: center;
`;

const Heading=styled.h1`
color:#000;
font-size: 10rem;
font-weight:900;
`;


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Hero>
      <Heading>
        lab 4 
      </Heading>
    </Hero>

    
    </>
  )
}
