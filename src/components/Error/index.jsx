import styled from "styled-components";
import codeBackground from '../../assets/01.svg';
import { keyframes } from "styled-components";
import CustomCursor from "../CustomCursor";

const backgroundScroll = keyframes`
    0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: 0% 1000%;
    }
`

const Container = styled.div`
    width: 100%;
    min-height: 75vh;
    position: relative;
`

const TitleAnimate = styled.h1`
    font-size: 150px;
    background: url(${codeBackground});
    animation: ${backgroundScroll} linear 30s infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    @media (min-width: 900px) {
        font-size: 300px;
    }
`

const ErrorContent = styled.p`
    position: absolute;
    width: 100%;
    left: 50%;
    top: 80%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 1.5rem;
`

function Error() {
    return(
        <Container>
            <CustomCursor />
            <TitleAnimate>&lt;404&gt;</TitleAnimate>
            <ErrorContent>Ce n'est pas la page que vous cherchez...</ErrorContent>
        </Container>
    )
}

export default Error;