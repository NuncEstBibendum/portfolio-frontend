import styled from "styled-components";
import { useEffect } from "react";
import { useTheme } from "../../utils/hooks";
import colors from "../../utils/style/colors";
import ImgWpWoo from "../../assets/logos.png";
import ImgLogoNav from "../../assets/logo_nav_square.png";
import CustomCursor from "../../components/CustomCursor";
import Aos from "aos";
import "aos/dist/aos.css";

const Container = styled.div`
  width: 80%;
  max-width: 810px;
  margin: 0 auto;
  padding-bottom: 75px;
`;

const TopSpacing = styled.div`
  height: 100px;
`;

const Title = styled.h1`
  font-weight: 400;
  margin-bottom: 75px;
  font-size: 2.5rem;
  text-transform: uppercase;
`;

const Subtitle = styled.h3`
  font-weight: 100;
  text-transform: uppercase;
  font-size: 1rem;
  margin-top: 75px;
`;

const SecondaryTitle = styled.h2`
  font-weight: 400;
  margin-bottom: 25px;
  font-size: 2rem;
`;

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
    color: ${({ theme }) =>
      theme === "colorMode0"
        ? colors.accent0
        : theme === "colorMode1"
        ? colors.accent1
        : theme === "colorMode2"
        ? colors.accent2
        : theme === "colorMode3"
        ? colors.accent3
        : theme === "colorMode4"
        ? colors.accent4
        : theme === "colorMode5"
        ? colors.accent5
        : colors.accent0};
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
`;

const BodyContent = styled.div`
  .subtitle {
    &:nth-child(2n) {
      text-align: right;
    }
  }
  .secondary-title {
    &:nth-child(2n + 1) {
      text-align: right;
    }
  }
`;

const ContentText = styled.div`
  width: 100%;
  @media (min-width: 900px) {
    width: 50%;
    text-align: justify;
  }
`;

const ContentImg = styled.img`
  width: 100%;
  max-width: 400px;
  margin: 20px auto 0 auto;
  @media (min-width: 900px) {
    width: 45%;
  }
`;

function About() {
  const { theme } = useTheme();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container id="top">
      <TopSpacing />
      <CustomCursor />
      <Subtitle data-aos="fade-up" style={{ marginTop: "0" }}>
        Ce que je fais
      </Subtitle>
      <Title data-aos="fade-up">
        De l'intégration à la création sur-mesure
      </Title>
      <Content theme={theme}>
        <ContentText style={{ width: "100%" }} data-aos="fade-up">
          <p>
            Développeur <span>Fullstack</span> TypeScript sur Toulouse en
            freelance.
          </p>
          <p>
            J'ai toujours voulu créer de nouvelles choses et apporter mon
            expertise à des projets innovants. Pour chaque projet, j'apporte une
            attention particulière à la <span>fluidité</span> des interactions
            ainsi qu'aux
            <span> performances</span> de votre application web ou mobile afin
            d'offrir à vos utilisateurs une expérience mémorable.
          </p>
          <p>
            Je m'adapte à vos besoins pour créer l'application web ou mobile et
            l'API qui vous conviennent. J'ai l'habitude travailler sur des
            technologies modernes comme :
            <ul>
              <li>
                <span>- React.js</span>
              </li>
              <li>
                <span>- Next.js</span>
              </li>
              <li>
                <span>- Blitz.js</span>
              </li>
              <li>
                <span>- NestJS</span>
              </li>
              <li>
                <span>- Typescript</span>
              </li>
            </ul>
          </p>
        </ContentText>
      </Content>

      <BodyContent>
        <Subtitle
          className="subtitle"
          data-aos="fade-up"
          data-aos-offset="-500"
        >
          Au plus proche de votre maquette
        </Subtitle>
        <SecondaryTitle
          className="secondary-title"
          data-aos="fade-up"
          data-aos-offset="-500"
        >
          Intégrateur responsive HTML, CSS, Typescript
        </SecondaryTitle>
        <Content theme={theme}>
          <ContentText data-aos="fade-up" data-aos-offset="-500">
            <p>
              Après validation des maquettes avec le webdesigner, je découpe les
              éléments graphiques du site afin de les <span>optimiser</span>.
            </p>
            <p>
              La deuxième étape consiste à{" "}
              <span>construire le squelette HTML</span> de votre site internet.
              L'enjeu est d'obtenir une structure solide et qui reflète votre
              contenu, afin de préparer votre site au{" "}
              <span>référencement naturel</span> sur Google.
            </p>
            <p>
              C'est avec la <span>mise en forme</span> CSS et la{" "}
              <span>création des animations</span> que votre site va prendre
              toute son ampleur. Ici aussi, la <span>rationalisation</span> est
              le maître mot : cela optimisera les performances de votre site, et
              donc, l'expérience utilisateur.
            </p>
            <p>
              Tout au long de la conception j'emploie le process du{" "}
              <span>cross-browser testing</span> qui consiste à vérifier que
              votre site se comporte de la même façon sur les navigateurs les
              plus utilisés du marché.
            </p>
          </ContentText>
          <ContentImg
            src={ImgLogoNav}
            data-aos="fade-up"
            data-aos-offset="-500"
          />
        </Content>

        <Subtitle
          className="subtitle"
          data-aos="fade-up"
          data-aos-offset="-500"
        >
          Extensible et adaptable
        </Subtitle>
        <SecondaryTitle
          className="secondary-title"
          data-aos="fade-up"
          data-aos-offset="-500"
        >
          Application web et mobile sur-mesure
        </SecondaryTitle>
        <Content theme={theme}>
          <ContentText data-aos="fade-up" data-aos-offset="-500">
            <p>
              Avec mes compétences en développement{" "}
              <span>Fullstack JavaScript</span> je suis à l'aise pour construire
              l'application web ou mobile qui répondra le mieux à vos besoins.
              J'ai déjà pu construire from scratch des applications web et
              mobiles complexes comme un réseau social semblable à Twitter, une
              marketplace pour de la vente de vêtements de seconde-main ou
              encore un blog pour un e-commerce.
            </p>
            <p>
              Quel que soit votre projet, je serai à même de vous conseiller sur
              les technologies à utiliser pour le mener à bien. Je peux
              également vous accompagner dans la <span>conception</span> de
              votre projet.
            </p>
          </ContentText>
          <ContentImg
            src={ImgWpWoo}
            data-aos="fade-up"
            data-aos-offset="-500"
          />
        </Content>
      </BodyContent>
    </Container>
  );
}

export default About;
