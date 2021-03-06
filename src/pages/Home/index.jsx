import styled, { keyframes } from "styled-components";
import HeroBgImg from "../../assets/hero_picture.jpg";
import webdesignImg from "../../assets/webdesign.jpg";
import colors from "../../utils/style/colors";
import Separator from "../../components/Separator";
import CardFolio from "../../components/CardFolio";
import ContactComponent from "../../components/ContactComponent";
import CustomCursor from "../../components/CustomCursor";
import { Loader } from "../../utils/style/loader";
import { useFetch, useTheme } from "../../utils/hooks";
import { useEffect, useState } from "react";
import Masonry from 'react-masonry-css';
import Aos from 'aos';
import "aos/dist/aos.css";

const breakpointColumnsObj = {
    default: 3,
    800: 2,
    500: 1
};

const spanFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0%);
    }
`

const GlobalContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    overflow-x: hidden;
`

const Hero = styled.div`
    width: 90%;
    max-width: 810px;
    margin: 0 auto;
    position: relative;
    min-height: 80vh;
`

const HeroTitle = styled.div`
    display: flex;

    @media (min-width: 1200px) {
        .img-container {
            right:0 ;
            position: absolute;
            width: 60%;
            height: 100%;
            overflow: hidden;
        }
    }
`

const Title = styled.h1`
    margin-top: 75px;
    font-weight: 400;
    font-size: 3rem;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: -3px;
    font-family: Outfit;
    color: ${({theme}) => (theme === 'colorMode0' ? colors.textColor0 : theme === 'colorMode1' ? 'antiquewhite' : theme === 'colorMode2' ? colors.textColor2 : theme === 'colorMode3' ? colors.textColor3 : theme === 'colorMode4' ? 'antiquewhite' : theme === 'colorMode5' ? colors.textColor5 : colors.textColor0)};
    .accent {
        font-family: "Playfair Display";
        font-weight: 500;
        color: ${({theme}) => (theme === 'colorMode0' ? colors.accent0 : theme === 'colorMode1' ? colors.accent1 : theme === 'colorMode2' ? colors.accent2 : theme === 'colorMode3' ? colors.accent3 : theme === 'colorMode4' ? colors.accent4 : theme === 'colorMode5' ? colors.accent5 : colors.accent0)};
    }
    > .reveal-container {
        overflow: hidden;
        display: block;
        &:nth-child(2) .reveal-content {
            animation-delay: 250ms;
        }
        &:nth-child(3) .reveal-content {
            animation-delay: 500ms;
        }
        > .reveal-content {
            opacity: 0;
            display: block;
            animation: ${spanFadeIn} 800ms ease forwards;
            transform: translateY(100%);
        }
    }
    mix-blend-mode: difference;
`

const HeroImg = styled.img`
    position: absolute;
    object-fit: cover;
    object-position: top;
    left: 40%;
    width: 100%;
    height: 100%;
    z-index: -3;
    max-width: 500px;
    transition: transform ease-in-out 100ms;
    @media (min-width: 1100px) {
        height: 100%;
        max-height: unset;
        right: 0;
        left: unset;
        transform: scale(1);
    }
`

const HeroContent = styled.div`
    position: absolute;
    bottom: 30px;
    margin-top: 100px;
    text-transform: uppercase;
    font-size: 20px;
    span {
        font-family: 'Playfair Display';
        font-style: italic;
    }
`

const Section = styled.section`
    width: 100%;
    margin: 0 auto;
    text-align: justify;
    position: relative;
    max-width: 810px;
    overflow: hidden;
`

const SectionImg = styled.img`
    position: absolute;
    object-fit: cover;
    object-position: top;
    right: 70%;
    width: 100%;
    height: 100%;
    z-index: -3;
    max-width: 500px;
    transition: transform ease-in-out 100ms;
    @media (min-width: 800px) {
        right: 60%;
    }
    @media (min-width: 1100px) {
        transform: scale(1);
    }
`

const SectionTitle = styled(Title)`
    text-align: right;
    padding-top: 30px;
    margin-top: 0;
    margin-right: 30px;
    @media (min-width: 800px) {
        width: 80%;
        margin-left: auto;
    }
`

const SectionContent = styled.div`
    font-size: 1.25rem;
    font-weight: 300;
    max-width: 810px;
    padding: 30px 30px;
    margin-left: auto;
    width: 70%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    mix-blend-mode: difference;
    color: ${({theme}) => (theme === 'colorMode0' ? colors.textColor0 : theme === 'colorMode1' ? 'antiquewhite' : theme === 'colorMode2' ? colors.textColor2 : theme === 'colorMode3' ? colors.textColor3 : theme === 'colorMode4' ? 'antiquewhite' : theme === 'colorMode5' ? colors.textColor5 : colors.textColor0)};
    
    span {
        color: ${({theme}) => (theme === 'colorMode0' ? colors.accent0 : theme === 'colorMode1' ? colors.accent1 : theme === 'colorMode2' ? colors.accent2 : theme === 'colorMode3' ? colors.accent3 : theme === 'colorMode4' ? colors.accent4 : theme === 'colorMode5' ? colors.accent5 : colors.accent0)};
    }

    p + p {
        margin-top: 25px;
    }

    @media (min-width: 800px) {
        width: 60%;
        margin-left: auto;
        margin-right: 0;
    }
`

const DeckOfCards = styled.div`
    margin: 0 auto;
    max-width: 95%;
    min-height: 80vh;

    .my-masonry-grid {
        display: -webkit-box; /* Not needed if autoprefixing */
        display: -ms-flexbox; /* Not needed if autoprefixing */
        display: flex;
        margin-left: -30px; /* gutter size offset */
        margin-top: 75px;
        margin-bottom: 75px;
        width: auto;
        
        &_column {
            padding-left: 30px; /* gutter size */
            background-clip: padding-box;
        }
    }
`

function Home() {
    const { theme } = useTheme();
    const [scrollTop, setScrollTop] = useState(0);
    const { data, isLoading, error } = useFetch(`https://portfolio-julien-gg.herokuapp.com/api/project`);

        // useEffect for fadein animations on paragraphs and images
        useEffect(() => {
            Aos.init({duration: 2000});
        }, [])

        // useEffect to zoom in hero img onScroll
        useEffect(() => {
            const zommInHeroImg = (e) => {
                if (window.screen.width >= 1200) {
                    let heroImg = document.getElementById('hero-img');
                    setScrollTop(e.target.documentElement.scrollTop);
                    heroImg.style.transform = `scale(${1+(scrollTop/3000)})`
                }
            };
            window.addEventListener('scroll', zommInHeroImg);
            return() => window.removeEventListener('scroll', zommInHeroImg);
        }, [scrollTop]);

    if (isLoading) return <Loader />;
    if (error) return {error};
    if (window.screen.width <= 1100) {
        return(
            <GlobalContainer>
                <CustomCursor />
                <Hero>
                    <HeroTitle>
                        <Title theme={theme}>
                            <span className="reveal-container"><span className="reveal-content">Je suis <span className="accent">Julien Grang??</span>, <br/></span></span>
                            <span className="reveal-container"><span className="reveal-content">D??veloppeur front-end</span></span>
                            <span className="reveal-container"><span className="reveal-content">freelance</span></span>
                        </Title>
                        <div className="img-container">
                            <HeroImg src={HeroBgImg} alt="" id="hero-img"/>
                        </div>
                    </HeroTitle>
                    <HeroContent>
                        <p>Bienvenue dans mon <span>portfolio</span></p>
                    </HeroContent>
                </Hero>
    
                <Separator content={'D??couvrez mes projets'}/>
    
                <Section className="portfolio" style={{maxWidth: "1300px"}} >
                    <DeckOfCards>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                        >
                        {data.map((project) => (
                            <CardFolio className='card'
                                key={project._id}
                                id= {project._id}
                                title = {project.title}
                                subtitle = {project.subtitle}
                                year = {project.year}
                                imgUrl = {project.imgUrl}
                            />
                        ))}
                        </Masonry>
                    </DeckOfCards>
                </Section>
    
                <Separator content={'?? propos de moi'} />
    
                <Section>
                    <SectionImg src={webdesignImg} />
                    <SectionTitle theme={theme}>D??veloppeur <span className="accent">frontend React</span> et <span className="accent">int??grateur</span> sur Lyon en freelance.</SectionTitle>
                    <SectionContent theme={theme}>
                        <p>J'ai toujours voulu cr??er de nouvelles choses et apporter mon expertise ?? des projets innovants.
                            Pour chaque projet, j'apporte une attention particuli??re ?? la <span>fluidit??</span> des interactions ainsi qu'aux
                            <span> performances</span> de votre site afin d'offrir ?? vos visiteurs une exp??rience m??morable.</p>
                        <p>Je m'adapte ?? vos besoins pour cr??er le site qui vous convient. J'ai l'habitude de baser mon travail
                            sur <span>Wordpress</span> mais aussi sur des <span>CMS Headless</span> tels que Strapi pour la gestion de contenu. Je travaille
                            aussi bien en javascript vanilla sur les petits projets, que sur le framework React, pour les projets
                            d'envergures.Mes connaissances en backend me permettent de <span>cr??er et d'adapter une API</span> ?? vos besoins, 
                            en lien avec le frontend.</p>
                    </SectionContent>
                </Section>
    
                <Separator content={'Contactez-moi'} id="contact" />
    
                <Section>
                    <ContactComponent />
                </Section>
    
            </GlobalContainer>
        )
    } else {
        return(
            <GlobalContainer>
                    <CustomCursor />
                <Hero>
                    <HeroTitle>
                        <Title theme={theme}>
                            <span className="reveal-container"><span className="reveal-content">Je suis <span className="accent">Julien Grang??</span>, <br/></span></span>
                            <span className="reveal-container"><span className="reveal-content">D??veloppeur front-end</span></span>
                            <span className="reveal-container"><span className="reveal-content">freelance</span></span>
                        </Title>
                        <div className="img-container">
                            <HeroImg src={HeroBgImg} alt="" id="hero-img"/>
                        </div>
                    </HeroTitle>
                    <HeroContent>
                        <p>Bienvenue dans mon <span>portfolio</span></p>
                    </HeroContent>
                </Hero>
    
                <Separator content={'D??couvrez mes projets'}/>
    
                <Section className="portfolio" style={{maxWidth: "1300px"}} >
                    <DeckOfCards>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                        >
                        {data.map((project) => (
                            <CardFolio className='card'
                                key={project._id}
                                id= {project._id}
                                title = {project.title}
                                subtitle = {project.subtitle}
                                year = {project.year}
                                imgUrl = {project.imgUrl}
                            />
                        ))}
                        </Masonry>
                    </DeckOfCards>
                </Section>
    
                <Separator content={'?? propos de moi'} />
    
                <Section>
                    <SectionImg src={webdesignImg} />
                    <SectionTitle theme={theme} data-aos="fade-up">D??veloppeur <span className="accent">frontend React</span> et <span className="accent">int??grateur</span> sur Lyon en freelance.</SectionTitle>
                    <SectionContent theme={theme}>
                        <p data-aos="fade-up">J'ai toujours voulu cr??er de nouvelles choses et apporter mon expertise ?? des projets innovants.
                            Pour chaque projet, j'apporte une attention particuli??re ?? la <span>fluidit??</span> des interactions ainsi qu'aux
                            <span> performances</span> de votre site afin d'offrir ?? vos visiteurs une exp??rience m??morable.</p>
                        <p data-aos="fade-up">Je m'adapte ?? vos besoins pour cr??er le site qui vous convient. J'ai l'habitude de baser mon travail
                            sur <span>Wordpress</span> mais aussi sur des <span>CMS Headless</span> tels que Strapi pour la gestion de contenu. Je travaille
                            aussi bien en javascript vanilla sur les petits projets, que sur le framework React, pour les projets
                            d'envergures.Mes connaissances en backend me permettent de <span>cr??er et d'adapter une API</span> ?? vos besoins, 
                            en lien avec le frontend.</p>
                    </SectionContent>
                </Section>
    
                <Separator content={'Contactez-moi'} id="contact" />
    
                <Section>
                    <ContactComponent />
                </Section>
    
            </GlobalContainer>
        )
    }
}

export default Home;