import styled from "styled-components";
import { useTheme } from "../../utils/hooks";
import CustomCursor from "../../components/CustomCursor";
import colors from "../../utils/style/colors";
import { projects } from "../../constants/constants";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

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
`;

const ImgContainer = styled.div`
  margin: 50px auto 0 auto;
  @media (min-width: 1100px) {
    margin-top: 0;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  margin: 0 auto;
  display: block;
  max-width: 500px;
`;

const ProjectContent = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 2.5rem;
  margin-top: 50px;
  @media (min-width: 1100px) {
    margin-top: 0;
  }
`;

const Subtitle = styled.h3`
  font-weight: 100;
  text-transform: uppercase;
  font-size: 1rem;
  margin: 5px 0;
`;
const Year = styled(Subtitle)`
  margin-bottom: 25px;
  @media (min-width: 1100px) {
    margin-bottom: 75px;
  }
`;

const Text = styled.p`
  padding-bottom: 25px;
  font-weight: 100;
  margin-bottom: 25px;
  @media (min-width: 1100px) {
    padding-bottom: 0px;
    padding-right: 25px;
  }
`;

const RotatingLink = styled.a`
  margin: 0 auto;
  position: relative;
  padding: 12px 20px;
  border-radius: 30px;
  background-color: ${({ theme }) =>
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
  color: ${({ theme }) =>
    theme === "colorMode0"
      ? colors.backgroundColor0
      : theme === "colorMode1"
      ? colors.backgroundColor1
      : theme === "colorMode2"
      ? colors.backgroundColor2
      : theme === "colorMode3"
      ? colors.backgroundColor3
      : theme === "colorMode4"
      ? colors.backgroundColor4
      : theme === "colorMode5"
      ? colors.backgroundColor5
      : colors.backgroundColor0};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 500ms ease;
  width: fit-content;

  span:first-child {
    transform: translateY(0%) rotateX(0);
    white-space: nowrap;
    transition: transform 500ms ease;
  }

  span:nth-child(2) {
    font-family: "Playfair Display";
    font-size: 0.85rem;
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
`;

function Project() {
  const { theme } = useTheme();

  const [projectId, setProjectId] = useState(1);
  const [activeProject, setActiveProject] = useState({});

  useEffect(() => {
    if (window.location) {
      const url = window.location.href;
      const match = url.match(/\/project\/(\d+)/);
      if (match && match[1]) {
        setProjectId(match[1]);
        console.log(projectId);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location]);

  useEffect(() => {
    setActiveProject(
      projects.filter(
        (project) => parseInt(project._id) === parseInt(projectId)
      )[0]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  return (
    <Container id="top">
      <ProjectContent>
        <CustomCursor />
        <Title>{activeProject.title}</Title>
        <Subtitle>{activeProject.subtitle}</Subtitle>
        <Year>{activeProject.year}</Year>
        <Text>
          {activeProject.description ? parse(activeProject.description) : ""}
        </Text>
        {activeProject.link ? (
          <RotatingLink
            href={activeProject.link}
            theme={theme}
            target={"_blank"}
            rel="noreferrer"
          >
            <span>Aller voir le projet</span>
            <span>Aller voir le projet</span>
          </RotatingLink>
        ) : (
          ""
        )}
      </ProjectContent>
      <ImgContainer className="project-img">
        {activeProject.link ? (
          <a href={activeProject.link} target={"_blank"} rel="noreferrer">
            <ProjectImage
              src={activeProject.imgUrl}
              alt="Illustration du projet"
            />
          </a>
        ) : (
          <ProjectImage
            src={activeProject.imgUrl}
            alt="Illustration du projet"
          />
        )}
      </ImgContainer>
    </Container>
  );
}

export default Project;
