import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useFetch } from "../../utils/hooks";
import { Loader } from "../../utils/style/loader";
import CustomCursor from "../../components/CustomCursor";

const Container = styled.div`
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
    min-height: 80vh;
    @media (min-width: 1100px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

const ImgContainer = styled.div`
    margin: 0 auto;
`

const ProjectImage = styled.img`
    width: 100%;
    margin: 0 auto;
    display: block;
    max-width: 500px;
`

const ProjectContent = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
`

const Title = styled.h1`
    font-weight: 400;
    font-size: 2.5rem;
    margin-top: 50px;
    @media(min-width: 1100px) {
        margin-top: 0;
    }
`

const Subtitle = styled.h3`
    font-weight: 100;
    text-transform: uppercase;
    font-size: 1rem;
    margin: 5px 0;
`
const Year = styled(Subtitle)`
    margin-bottom: 25px;
    @media (min-width: 1100px) {
        margin-bottom: 75px;
    }
`

const Text = styled.p`
    padding-bottom: 25px;
    font-weight: 100;
    @media (min-width: 1100px) {
        padding-bottom: 0px;
        padding-right: 25px;
    }
`

function Project() {
    const { id } = useParams();
    const { data, setLoading, error } = useFetch(`https://portfolio-julien-gg.herokuapp.com/api/project/${id}`);
    const {
        title,
        subtitle,
        year,
        description,
        imgUrl
    } = data;

    if (setLoading) return <Loader />;
    if (error) return {error};
    return(
        <Container id="top">
            <CustomCursor />
            <ProjectContent>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <Year>{year}</Year>
                <Text>{description}</Text>
            </ProjectContent>
            <ImgContainer className="project-img">
                <ProjectImage src={imgUrl} alt="" />
            </ImgContainer>
        </Container>
    )
}

export default Project;