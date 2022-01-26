import styled from "styled-components";
import { useTheme, useFetch } from "../../utils/hooks";
import colors from "../../utils/style/colors";
import Masonry from "react-masonry-css";
import CardFolio from "../../components/CardFolio";
import { Loader } from "../../utils/style/loader";
import CustomCursor from "../../components/CustomCursor";

const breakpointColumnsObj = {
    default: 3,
    800: 2,
    500: 1
};

const Container = styled.div`
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 75px; 
`

const TopSpacing = styled.div`
    height: 100px;
`

const PresentationText = styled.div`
    max-width: 810px;
    margin: 0 auto;
`

const Title = styled.h1`
    font-weight: 400;
    margin-bottom: 75px;
    font-size: 2.5rem;
`

const Subtitle = styled.h3`
    font-weight: 100;
    text-transform: uppercase;
    font-size: 1rem;
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

const ContentText = styled.div`
    width: 100%;
    @media (min-width: 900px) {
        width: 50%;
        text-align: justify;
    }  
`

const Section = styled.section`
    width: 100%;
    margin: 0 auto;
    text-align: justify;
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



function Portfolio() {
    const { theme } = useTheme();
    const { data, isLoading, error } = useFetch(`https://portfolio-julien-gg.herokuapp.com/api/project`);

    if (isLoading) return <Loader />;
    if (error) return { error };

    return(
        <Container id="top">
            <TopSpacing />
            <CustomCursor />
            <PresentationText>
                <Subtitle>Des solutions sur-mesure</Subtitle>
                <Title>Découvrez mes réalisations</Title>
                <Content theme={theme}>
                    <ContentText style={{width: '100%'}}>
                        <p>J'ai la volonté de toujours apporter une solution <span>sur-mesure</span> par rapport à vos besoins. Je vous laisse découvrir ici certaines de mes <span>réalisations</span> les plus récentes.</p>
                    </ContentText>
                </Content>
            </PresentationText>

            <Section className="portfolio">
                <DeckOfCards>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                    {data.map((project) => (
                        <CardFolio
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
        </Container>
    )
}

export default Portfolio;