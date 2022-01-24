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
`

const ProjectContent = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
`

function Project() {
    const { id } = useParams();
    const { data, setLoading, error } = useFetch(`http://localhost:3000/api/project/${id}`);

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
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <h3>{year}</h3>
                <p>{description}</p>
            </ProjectContent>
            <ImgContainer className="project-img">
                <ProjectImage src={imgUrl} alt="" />
            </ImgContainer>
        </Container>
    )
}

export default Project;