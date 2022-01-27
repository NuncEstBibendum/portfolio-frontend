import styled from "styled-components";
import { useEffect } from "react";
import { useTheme } from "../../utils/hooks";
import colors from "../../utils/style/colors";
import ImgReactNode from '../../assets/react_node.png';
import ImgWpWoo from '../../assets/wordpress_woocommerce.png';
import ImgLogoNav from '../../assets/logo_nav_square.png';
import CustomCursor from "../../components/CustomCursor";
import Aos from 'aos';
import "aos/dist/aos.css";

const Container = styled.div`
    width: 80%;
    max-width: 810px;
    margin: 0 auto;
    padding-bottom: 75px; 
`

const TopSpacing = styled.div`
    height: 100px;
`

const Title = styled.h1`
    font-weight: 400;
    margin-bottom: 75px;
    font-size: 2.5rem;
    text-transform: uppercase;
`

const Subtitle = styled.h3`
    font-weight: 100;
    text-transform: uppercase;
    font-size: 1rem;
    margin-top: 75px;
`


const SecondaryTitle = styled.h2`
    font-weight: 400;
    margin-bottom: 25px;
    font-size: 2rem;
`

const Content = styled.div`
    font-size: 1.25rem;
    font-weight: 300;
    max-width: 810px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    span {
        color: ${({theme}) => (theme === 'colorMode0' ? colors.accent0 : theme === 'colorMode1' ? colors.accent1 : theme === 'colorMode2' ? colors.accent2 : theme === 'colorMode3' ? colors.accent3 : theme === 'colorMode4' ? colors.accent4 : theme === 'colorMode5' ? colors.accent5 : colors.accent0)};
    }

    p + p {
        margin-top: 25px;
    }
    
    @media (min-width: 900px) {
        flex-direction: row;

        &:nth-child(2n) {
            flex-direction: row-reverse;
        }
    }
`

const BodyContent = styled.div`
    .subtitle {
        &:nth-child(2n) {
            text-align: right;
        }
    }
    .secondary-title {
        &:nth-child(2n+1) {
            text-align: right;
        }
    }
`

const ContentText = styled.div`
    width: 100%;
    @media (min-width: 900px) {
        width: 50%;
        text-align: justify;
    }  
`

const ContentImg = styled.img`
    width: 100%;
    max-width: 400px;
    margin: 20px auto 0 auto;
    @media (min-width: 900px) {
        width: 45%;
    }
`

function About() {
    const {theme} = useTheme();

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return(
        <Container id="top">
            <TopSpacing />
            <CustomCursor />
            <Subtitle data-aos="fade-up" style={{marginTop: "0"}}>Ce que je fais</Subtitle>
            <Title data-aos="fade-up">De l'intégration à la création sur-mesure</Title>
            <Content theme={theme}>
                <ContentText style={{width: '100%'}} data-aos="fade-up">
                    <p>Développeur <span>frontend React</span> et <span>intégrateur</span> sur Lyon en freelance.</p>
                    <p>J'ai toujours voulu créer de nouvelles choses et apporter mon expertise à des projets innovants.
                        Pour chaque projet, j'apporte une attention particulière à la <span>fluidité</span> des interactions ainsi qu'aux
                        <span> performances</span> de votre site afin d'offrir à vos visiteurs une expérience mémorable.</p>
                    <p>Je m'adapte à vos besoins pour créer le site qui vous convient. J'ai l'habitude de baser mon travail
                        sur <span>Wordpress</span> mais aussi sur des <span>CMS Headless</span> tels que Strapi pour la gestion de contenu. Je travaille
                        aussi bien en javascript vanilla sur les petits projets, que sur le framework React, pour les projets
                        d'envergures.Mes connaissances en backend me permettent de <span>créer et d'adapter une API</span> à vos besoins,
                        en lien avec le frontend.</p>
                </ContentText>
            </Content>

            <BodyContent>

                <Subtitle className="subtitle" data-aos="fade-up" data-aos-offset="-500">Au plus proche de votre maquette</Subtitle>
                <SecondaryTitle className="secondary-title" data-aos="fade-up" data-aos-offset="-500">Intégrateur responsive HTML, CSS, Javascript</SecondaryTitle>
                <Content theme={theme}>
                    <ContentText data-aos="fade-up" data-aos-offset="-500">
                        <p>Après validation des maquettes avec le webdesigner, je découpe les éléments graphiques du site afin de les <span>optimiser</span>.</p>
                        <p>La deuxième étape consiste à <span>construire le squelette HTML</span> de votre site internet. L'enjeu est d'obtenir une structure
                            solide et qui reflète votre contenu, afin de préparer votre site au <span>référencement naturel</span> sur Google.</p>
                        <p>C'est avec la <span>mise en forme</span> CSS et la <span>création des animations</span> que votre site va prendre toute son ampleur.
                            Ici aussi, la <span>rationalisation</span> est le maître mot : cela optimisera les performances de votre site, et donc,
                            l'expérience utilisateur.</p>
                        <p>Tout au long de la conception j'emploie le process du <span>cross-browser testing</span> qui consiste à vérifier que votre site
                            se comporte de la même façon sur les navigateurs les plus utilisés du marché.</p>
                    </ContentText>
                    <ContentImg src={ImgLogoNav} data-aos="fade-up" data-aos-offset="-500"/>
                </Content>

                <Subtitle className="subtitle" data-aos="fade-up" data-aos-offset="-500">Extensible et adaptable</Subtitle>
                <SecondaryTitle className="secondary-title" data-aos="fade-up" data-aos-offset="-500">Site e-commerce avec Woocommerce</SecondaryTitle>
                <Content theme={theme}>
                    <ContentText data-aos="fade-up" data-aos-offset="-500">
                        <p><span>Woocommerce</span> est une des plateformes e-commerce les plus répandues sur le web puisqu'elle est utilisée par 30% des sites e-commerce.</p>
                        <p>Quel que soit votre type de produits (physique, digital, souscription, etc.) et la taille de votre catalogue, Woocommerce vous
                            permet de <span>scaler votre site</span> selon vos besoins.</p>
                    </ContentText>
                    <ContentImg src={ImgWpWoo} data-aos="fade-up" data-aos-offset="-500" />
                </Content>

                <Subtitle className="subtitle" data-aos="fade-up" data-aos-offset="-500">Pour vos grands projets</Subtitle>
                <SecondaryTitle className="secondary-title" data-aos="fade-up" data-aos-offset="-500">React & Node.js</SecondaryTitle>
                <Content theme={theme}>
                    <ContentText data-aos="fade-up" data-aos-offset="-500">
                        <p>Pour vos projets <span>plus ambitieux</span>, je saurai construire votre site à l'aide de <span>React</span> afin d'optimiser son fonctionnement. Je peux également
                            créer un <span>espace d'administration</span> de votre site (ou backend) à l'aide de Node.js.</p>
                        <p>React est une bibliothèque javascript permettant de construire des <span>interfaces utilisateurs interactives</span>. Une application web utilisant React
                            sera découpée en <span>composants</span> qui seront mis à jour de façon optimale. Plus besoin de recharger une page en entier, seul le composant
                            en question sera rafraîchit, transformant votre site en <span>Single Page Application</span>.</p>
                        <p>Node.js est un environnement permettant de créer des <span>services back-end en javascript</span>, tels que des API. Il fournit des services <span>
                            rapides et évolutifs</span>. Il est notamment utilisé par Paypal, Uber et Netflix.</p>
                    </ContentText>
                    <ContentImg src={ImgReactNode} data-aos="fade-up" data-aos-offset="-500" />
                </Content>
            </BodyContent>

        </Container>
    )
}

export default About;