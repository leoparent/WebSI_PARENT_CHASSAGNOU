import styled from 'styled-components'
import Link from 'next/link';



const FooterSection = styled.div`
background: #000;
color: #fff;
height:60px;
display: flex ;
justify-content:space-betweenk;
align-items: center;
`;

const StyledLink = styled.a`
padding: 0rem 2rem ;
`;

const Footer = () => {
  return (
    <FooterSection>
        <div>
                <StyledLink>Nous contactez via nos différentes platformes : </StyledLink>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/l%C3%A9o-parent-742b44222/">
                <StyledLink>Linkedin</StyledLink>
        </a>
        <a href="https://github.com/leoparent/WebSI_PARENT_CHASSAGNOU">
                <StyledLink>Git</StyledLink>
        </a>
        <a href="https://www.ece.fr/">
                <StyledLink>ECE NOTRE Campus</StyledLink>
        </a>
        <a href="/voir notre projet">
                <StyledLink>voir ma voiture</StyledLink>
        </a>
        <a href="mailto:leo.parent@edu.ece.fr">
                <StyledLink>outlook</StyledLink>
        </a>
        </div>
    </FooterSection>
  )
}

export default Footer