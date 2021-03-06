import styled from "styled-components";
import Card from 'card-vibes';
import colors from "../../utils/style/colors";
import { useTheme } from "../../utils/hooks";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const CardContainer = styled.article`
    width: 100%;
    margin: 0 auto 20px auto;

    h3 {
        font-weight: 100;
    }

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
    }

    .card__header {
        opacity: 0;
        position: absolute;
        top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        transition: opacity 500ms ease;
        z-index: 1;
        h2 {
            margin: 25px 0px;
        }
    }

    p {
        opacity: 0;
        position: absolute;
        left: 50%;
        z-index:1;
        text-align: center;
        transform: translateX(-50%);
        transition: opacity 500ms ease;
        bottom: 50px;
    }

    .tilt-card {
        position: relative;
        overflow: hidden;

        &:hover {
            img {
                transform: scale(1.2);
            }
            .card__header , p {
                opacity: 1;
            }
            &:after {
                background: rgba(0,0,0,0.5);
                border-width: 15px;
            }
        }

        img {
            width:100%;
            transition: all 500ms ease;
            min-height: 60vh;
            object-fit: cover;
        }

        &:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0,0,0,0);
            border: 0px solid ${({theme}) => (theme === 'colorMode0' ? colors.accent0 : theme === 'colorMode1' ? colors.accent1 : theme === 'colorMode2' ? colors.accent2 : theme === 'colorMode3' ? colors.accent3 : theme === 'colorMode4' ? colors.accent4 : theme === 'colorMode5' ? colors.accent5 : colors.accent0)};
            transition: all 500ms ease;
        }
        @media (max-width: 1100px) {
            img {
                transform: scale(1.2);
            }
            &:after {
                background: rgba(0,0,0,0.5);
                border-width: 15px;
            }
            .card__header, p {
                opacity: 1;
            }
        }
    }
    @media (max-width: 1100px) {
        img {
            transform: scale(1.2);
        }
    }
`


function CardFolio({ id, year, title, subtitle, imgUrl }) {
    const { theme } = useTheme();

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    if (window.screen.width <= 1100) {
        return (
            <CardContainer theme={theme}>
                <HashLink to={`/project/${id}#top`}>
                    <Card className='tilt-card' style={{ padding: '0' }}>
                        <div className="card__header">
                            <h3>{year}</h3>
                            <h2>{title}</h2>
                            <h3>{subtitle}</h3>
                        </div>
                        <img src={imgUrl} alt=""/>
                        <p>Aller voir le projet</p>
                    </Card>
                </HashLink>
            </CardContainer>
        )
    } else {
        return(
            <CardContainer theme={theme} data-aos="fade-up">
                <HashLink to={`/project/${id}#top`}>
                    <Card className='tilt-card' style={{ padding: '0' }}>
                        <div className="card__header">
                            <h3>{year}</h3>
                            <h2>{title}</h2>
                            <h3>{subtitle}</h3>
                        </div>
                        <img src={imgUrl} alt=""/>
                        <p>Aller voir le projet</p>
                    </Card>
                </HashLink>
            </CardContainer>
        )
    }
}

export default CardFolio;