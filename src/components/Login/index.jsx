import { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../utils/hooks";
import colors from "../../utils/style/colors";
import CustomCursor from "../CustomCursor";

const Container = styled.div`
    width: 80%;
    max-width: 500px;
    margin: 0 auto;
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 75px 0;
`

const LoginInput = styled.input`
    margin-bottom: 20px;
    width: 70%;
    height: 50px;
    border-radius: 10px;
    border: 1px solid ${({theme}) => (theme === 'colorMode0' ? colors.accent0 : theme === 'colorMode1' ? colors.accent1 : theme === 'colorMode2' ? colors.accent2 : theme === 'colorMode3' ? colors.accent3 : theme === 'colorMode4' ? colors.accent4 : theme === 'colorMode5' ? colors.accent5 : colors.accent0)};
    text-align: center;
    font-size: 1.25rem;
    font-weight: 100;
    transition: all ease-in-out 300ms;
    &:focus {
        outline: none;
        width: 100%;
        border-width: 3px;
    }
`

const LoginButton = styled.button`
    padding: 0.5em 2em;
    font-size: 1.25rem;
    border-radius: 30px;
    border: 1px solid ${({theme}) => (theme === 'colorMode0' ? colors.accent0 : theme === 'colorMode1' ? colors.accent1 : theme === 'colorMode2' ? colors.accent2 : theme === 'colorMode3' ? colors.accent3 : theme === 'colorMode4' ? colors.accent4 : theme === 'colorMode5' ? colors.accent5 : colors.accent0)};
    background: none;
    transition: all ease-in-out 300ms;
    &:hover {
        background-color: ${({theme}) => (theme === 'colorMode0' ? colors.accent0 : theme === 'colorMode1' ? colors.accent1 : theme === 'colorMode2' ? colors.accent2 : theme === 'colorMode3' ? colors.accent3 : theme === 'colorMode4' ? colors.accent4 : theme === 'colorMode5' ? colors.accent5 : colors.accent0)};
        color: #fff;
    }
`

const ErrorMessage = styled.p`
    margin-top: 30px;
    font-weight: 300;
    text-align: center;
`

function Login(props) {
    const { theme } = useTheme();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [text, setText] = useState('');

    const { setLoggedIn } = props;

    const handleSubmit = async (e) => {
        e.preventDefault();

        fetch('https://portfolio-julien-gg.herokuapp.com/api/auth/login', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => {
            if (response.status === 400) {
                setText('Email ou mot de passe erroné');
            } else if (response.status !== 200) {
                throw new Error(`Impossible de se connecter à l'API. Status: ${response.status}`);
            }
            return response;
        })
        .then(response => response.json())
        .then(response => {
            localStorage.setItem('jwt', response.token);
            localStorage.setItem('userId', response.userId);
            setText('Vous vous êtes connecté avec succès. Vous allez être redirigé dans quelques secondes...');
            setTimeout(() => window.location.reload(false), 3000);
        })
        .catch(error => {
            if(error.response) {
                console.log('Une erreur est survenue : ', error.response)
                setLoggedIn(false)
            }
        });
    }


    return(
        <Container>
            <CustomCursor />
            <LoginForm action="" onSubmit={(e) => handleSubmit(e)}>
                <LoginInput 
                    type="email" 
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    name="Email"
                />
                <LoginInput 
                    type="password" 
                    placeholder="Mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <LoginButton type="submit" theme={theme}>Connexion</LoginButton>
                <ErrorMessage>{text}</ErrorMessage>
            </LoginForm>
        </Container>
    )
}

export default Login