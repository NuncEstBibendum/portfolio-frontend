import { useState } from "react";
import styled from "styled-components";
import Login from "../../components/Login";
import ProjectItem from "../../components/ProjectItem";
import CustomCursor from "../../components/CustomCursor";
import { projects } from "../../constants/constants";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 50px;
`;

const Sidebar = styled.div`
  width: 20%;
  margin-top: 68px;
  margin-right: 15px;
  border: 1px solid black;
  border-collapse: collapse;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  li {
    font-weight: 500;
    font-size: 1.25rem;
    padding: 15px 0;
    border-bottom: 1px solid black;
    text-align: center;
  }
`;

const ContentContainer = styled.div``;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Table = styled.table`
  text-align: center;
  border-collapse: collapse;
  tr {
    border: 1px solid black;
    &:nth-child(2n + 1) {
      background-color: #ddd;
    }
  }
  th,
  td {
    padding: 10px;
    border: 1px solid black;
  }
  th {
    background-color: #aaccdd;
  }
`;

const Button = styled.button`
  padding: 3px 10px;
`;

function Admin() {
  const isLogged = !!localStorage.getItem("userId");
  const [isCreating, setIsCreating] = useState(false);

  if (isLogged) {
    return (
      <Container>
        <CustomCursor />
        <Sidebar>
          <ul>
            <li>Projets</li>
            <li>Produits</li>
          </ul>
        </Sidebar>
        <ContentContainer>
          <ContentHeader>
            <h1>Liste des projets</h1>
            <Button onClick={() => setIsCreating(!isCreating)}>Ajouter</Button>
          </ContentHeader>
          <Table>
            <thead>
              <tr>
                <th>Titre</th>
                <th>Sous-titre</th>
                <th>Année</th>
                <th>Description</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <ProjectItem
                  key={project._id}
                  _id={project._id}
                  title={project.title}
                  subtitle={project.subtitle}
                  year={project.year}
                  description={project.description}
                  imgUrl={project.imgUrl}
                />
              ))}
            </tbody>
          </Table>
        </ContentContainer>
      </Container>
    );
  } else {
    return (
      <Container>
        <Login />
      </Container>
    );
  }
}

export default Admin;
