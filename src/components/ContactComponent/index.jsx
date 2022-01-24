import styled from "styled-components";
import colors from "../../utils/style/colors";
import { keyframes } from "styled-components";
import { useTheme } from "../../utils/hooks";
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

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

const Container = styled.div`
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.h1`
    position: relative;
    z-index: 0;
    font-weight: 400;
    font-size: 3.2rem;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: -3px;
    font-family: Outfit;
    margin: 0 auto 30px auto;
    padding: 0 30px;
    text-align: center;
    font-size: 2.5rem;
    letter-spacing: -2px;
    max-width: 810px;
    color: ${({theme}) => (theme === 'colorMode0' ? colors.textColor0 : theme === 'colorMode1' ? colors.textColor1 : theme === 'colorMode2' ? colors.textColor2 : theme === 'colorMode3' ? colors.textColor3 : theme === 'colorMode4' ? colors.textColor4 : theme === 'colorMode5' ? colors.textColor5 : colors.textColor0)};
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
`

const RotatingLink = styled.a`
    margin: 0 auto;
    position: relative;
    width: 300px;
    padding: 12px 0;
    font-size: 1.6rem;
    background-color: ${({theme}) => (theme === 'colorMode0' ? colors.backgroundColor0 : theme === 'colorMode1' ? colors.backgroundColor1 : theme === 'colorMode2' ? colors.backgroundColor2 : theme === 'colorMode3' ? colors.backgroundColor3 : theme === 'colorMode4' ? colors.backgroundColor4 : theme === 'colorMode5' ? colors.backgroundColor5 : colors.backgroundColor0)};
    border: 2px solid ${({theme}) => (theme === 'colorMode0' ? colors.accent0 : theme === 'colorMode1' ? colors.accent1 : theme === 'colorMode2' ? colors.accent2 : theme === 'colorMode3' ? colors.accent3 : theme === 'colorMode4' ? colors.accent4 : theme === 'colorMode5' ? colors.accent5 : colors.accent0)};
    border-radius: 30px;
    color: ${({theme}) => (theme === 'colorMode0' ? colors.textColor0 : theme === 'colorMode1' ? colors.textColor1 : theme === 'colorMode2' ? colors.textColor2 : theme === 'colorMode3' ? colors.textColor3 : theme === 'colorMode4' ? colors.textColor4 : theme === 'colorMode5' ? colors.textColor5 : colors.textColor0)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 500ms ease;

    span:first-child {
        transform: translateY(0%) rotateX(0);
        white-space: nowrap;
        transition: transform 500ms ease;
    }

    span:nth-child(2) {
        font-family: "Playfair Display";
        font-size: 1.35rem;
        font-weight: 600;
        position: absolute;
        transform: translateY(100%) rotateX(-90deg);
        white-space: nowrap;
        transform-origin: top;
        transition: transform 500ms ease;
    }

    &:hover {
        background-color: ${({theme}) => (theme === 'colorMode0' ? colors.accent0 : theme === 'colorMode1' ? colors.accent1 : theme === 'colorMode2' ? colors.accent2 : theme === 'colorMode3' ? colors.accent3 : theme === 'colorMode4' ? colors.accent4 : theme === 'colorMode5' ? colors.accent5 : colors.accent0)};
        color: ${({theme}) => (theme === 'colorMode0' ? colors.backgroundColor0 : theme === 'colorMode1' ? colors.backgroundColor1 : theme === 'colorMode2' ? colors.backgroundColor2 : theme === 'colorMode3' ? colors.backgroundColor3 : theme === 'colorMode4' ? colors.backgroundColor4 : theme === 'colorMode5' ? colors.backgroundColor5 : colors.backgroundColor0)};
        span:first-child {
            transform: translateY(-50%) rotateX(-90deg);
        }
        span:nth-child(2) {
            transform: translateY(0%) rotateX(0);
        }
    }
`

function ContactComponent() {
    const { theme } = useTheme();

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return(
        <Container data-aos="fade-left">
            <Title theme={theme}>Vous avez envie de <a href="mailto:julien.grangeguermente@gmail.com"><span className="accent">discuter</span></a> d'un projet ? Je serai ravi de vous aider !</Title>
            <RotatingLink href="mailto:julien.grangeguermente@gmail.com" theme={theme}>
                <span>Envoyez-moi un email</span>
                <span>Envoyez-moi un email</span>
            </RotatingLink>
        </Container>
    )
}

export default ContactComponent;