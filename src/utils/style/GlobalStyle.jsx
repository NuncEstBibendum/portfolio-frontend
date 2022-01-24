import { createGlobalStyle } from "styled-components";
import { useTheme } from "../hooks";
import colors from "./colors";
import { keyframes } from "styled-components";
import backgroundStars from '../../assets/bg-stars.svg';

const backgroundScroll = keyframes`
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: -1000px 100%;
    }
`

const StyledGlobalStyle = createGlobalStyle`
    ::root {
        --rgbBackgroundDark: 255, 255, 255;
        --rgbBackgroundLight: 0, 0, 0;
        --navbarOpacity: 0;
    }

    * {
        margin: 0;
        padding: 0;
        list-style: none;
        font-family: 'Roboto condensed', console-sans;
        box-sizing: border-box;
        text-decoration: none;
        cursor: none;
        scroll-behavior: smooth;
    }

    body {
        overflow-x: hidden;
        background: url(${backgroundStars}), ${(props) => 
            props.colorModeNumber === 'colorMode0' ? colors.backgroundColor0 : 
            props.colorModeNumber === 'colorMode1' ? colors.backgroundColor1 :
            props.colorModeNumber === 'colorMode2' ? colors.backgroundColor2 :
            props.colorModeNumber === 'colorMode3' ? colors.backgroundColor3 :
            props.colorModeNumber === 'colorMode4' ? colors.backgroundColor4 :
            props.colorModeNumber === 'colorMode5' ? colors.backgroundColor5 :
            colors.backgroundColor0
        };
        color: ${(props) => 
            props.colorModeNumber === 'colorMode0' ? colors.textColor0 : 
            props.colorModeNumber === 'colorMode1' ? colors.textColor1 :
            props.colorModeNumber === 'colorMode2' ? colors.textColor2 :
            props.colorModeNumber === 'colorMode3' ? colors.textColor3 :
            props.colorModeNumber === 'colorMode4' ? colors.textColor4 :
            props.colorModeNumber === 'colorMode5' ? colors.textColor5 :
            colors.textColor0
        };
        background-position: 0 0;
        animation: ${backgroundScroll} linear 600s infinite;
        scroll-behavior: smooth;
    }
`

function GlobalStyle() {
    const { theme } = useTheme();

    return <StyledGlobalStyle colorModeNumber={theme === 'colorMode0' ? 'colorMode0' : theme === 'colorMode1' ? 'colorMode1' : theme === 'colorMode2' ? 'colorMode2' : theme === 'colorMode3' ? 'colorMode3' : theme === 'colorMode4' ? 'colorMode4' : theme === 'colorMode5' ? 'colorMode5' : 'colorMode0'} />
}

export default GlobalStyle