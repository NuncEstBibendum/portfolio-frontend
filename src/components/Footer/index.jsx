import styled from "styled-components";
import { useTheme } from "../../utils/hooks";
import colors from "../../utils/style/colors";

const FooterContainer = styled.div`
    border-top: 1px solid ${({theme}) => (theme === 'colorMode0' ? colors.textColor0 : theme === 'colorMode1' ? colors.textColor1 : theme === 'colorMode2' ? colors.textColor2 : theme === 'colorMode3' ? colors.textColor3 : theme === 'colorMode4' ? colors.textColor4 : theme === 'colorMode5' ? colors.textColor5 : colors.textColor0)};
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 25px 5%;
    align-items: center;
    a {
        color: ${({theme}) => (theme === 'colorMode0' ? colors.textColor0 : theme === 'colorMode1' ? colors.textColor1 : theme === 'colorMode2' ? colors.textColor2 : theme === 'colorMode3' ? colors.textColor3 : theme === 'colorMode4' ? colors.textColor4 : theme === 'colorMode5' ? colors.textColor5 : colors.textColor0)};
    }
    a + a {
        margin-left: 10px;
    }
    p {
        margin-right: 8px;
    }
`
const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    button {
        margin-left: 10px;
        width: 35px;
        height: 35px;
        font-size: 1.25rem;
        background: transparent;
        border: 1px solid ${({theme}) => (theme === 'colorMode0' ? colors.textColor0 : theme === 'colorMode1' ? colors.textColor1 : theme === 'colorMode2' ? colors.textColor2 : theme === 'colorMode3' ? colors.textColor3 : theme === 'colorMode4' ? colors.textColor4 : theme === 'colorMode5' ? colors.textColor5 : colors.textColor0)};
        border-radius: 5px;
        color: ${({theme}) => (theme === 'colorMode0' ? colors.textColor0 : theme === 'colorMode1' ? colors.textColor1 : theme === 'colorMode2' ? colors.textColor2 : theme === 'colorMode3' ? colors.textColor3 : theme === 'colorMode4' ? colors.textColor4 : theme === 'colorMode5' ? colors.textColor5 : colors.textColor0)};
        &:hover {
            background-color: #fff;
        }
    }
    .language-button {
        font-family: "Playfair display";
        padding: 0px 5px;
        width: auto;
    }
`
const LinksContainer = styled.div`
    display: flex;

`

const RotatingLink = styled.a`
    margin: 0 auto;
    position: relative;
    padding: 12px 0;
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
        font-size: 0.8rem;
        font-weight: 600;
        position: absolute;
        transform: translateY(100%) rotateX(-90deg);
        white-space: nowrap;
        transform-origin: top;
        transition: transform 500ms ease;
    }

    &:hover {
        span:first-child {
            transform: translateY(-50%) rotateX(-90deg);
        }
        span:nth-child(2) {
            transform: translateY(0%) rotateX(0);
        }
    }
`


function Footer() {
    const { toggleTheme, theme } = useTheme();

    return(
        <FooterContainer theme={theme}>
            <LinksContainer>
                <RotatingLink href="https://www.linkedin.com/in/julien-grang%C3%A9-guermente-80b8bb5b/" theme={theme} target={"_blank"}>
                    <span>LinkedIn</span>
                    <span>LinkedIn</span>
                </RotatingLink>
                <RotatingLink href="https://twitter.com/aldnunc" theme={theme} target={"_blank"}>
                    <span>Twitter</span>
                    <span>Twitter</span>
                </RotatingLink>
            </LinksContainer>
            <ButtonsContainer theme={theme}>
                <p>Click →</p>
                {/* <button className="language-button"><em>Fish'n chips</em></button> */}
                <button className="theme-button" onClick={() => toggleTheme()}>{theme === 'colorMode0' ? '⛄' : theme === 'colorMode1' ? '🪁' : theme === 'colorMode2' ? '🔮' : theme === 'colorMode3' ? '🍊' : theme === 'colorMode4' ? '💧' : theme === 'colorMode5' ? '🍫' : '⛄'}</button>
            </ButtonsContainer>
        </FooterContainer>
    )
}

export default Footer;