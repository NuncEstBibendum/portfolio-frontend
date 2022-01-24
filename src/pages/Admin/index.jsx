import { useState } from "react";
import styled from "styled-components";
import Login from "../../components/Login";
import { useFetch } from "../../utils/hooks";
import { Loader } from "../../utils/style/loader";
import ProjectItem from "../../components/ProjectItem";
import CustomCursor from "../../components/CustomCursor";

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    padding: 50px;
`

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
`

const ContentContainer = styled.div`

`

const ContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`

const Table = styled.table`
    text-align: center;
    border-collapse: collapse;
    tr {
        border: 1px solid black;
        &:nth-child(2n+1) {
            background-color: #ddd;
        }
    }
    th, td {
        padding: 10px;
        border: 1px solid black;
    }
    th {
        background-color: #aaccdd;
    }
`

const Button = styled.button`
    padding: 3px 10px;
`

const CreateProject = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 50px auto;
    justify-content: center;
    
    input {
        margin-bottom: 20px;
        height: 30px;
    }

    textarea {
        margin-bottom: 20px;
    }

    button {
        width: 150px;
        margin: 0 auto;
    }
`

function Admin() {
    const isLogged = !!localStorage.getItem('userId');
    const [isCreating, setIsCreating] = useState(false);
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const { data, isLoading, error } = useFetch(`http://localhost:3000/api/project`);

    // --------------- Start handleCreate() function --------------- //
    const handleCreate = async (e) => {
        e.preventDefault();

        fetch(`http://localhost:3000/api/project`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            },
            body: JSON.stringify({
                title: title,
                subtitle: subtitle,
                year: year,
                description: description,
                imgUrl: imgUrl
            })
        })
        .then(response => {
            if (response.status !== 200) {
                throw new Error(`Mauvaise requête. Status: ${response.status}`);
            }
            return response;
        })
        .then(response => response.json())
        .then(() => {
            setIsCreating(!isCreating);
            setText('Projet créé.');
            window.location.reload(false);
        })
        .catch(error => {
            if(error.response) {
                console.log("Une erreur s'est produite: ", error.response)
            }
        });
    }
    // --------------- End handleCreate() function --------------- //
    
    if (isLoading) return <Loader />
    if (error) return <p>{error}</p>
    if (isCreating) return (
        <CreateProject>
                <input type="text" placeholder="Titre" onChange={(e) => setTitle(e.target.value)}/>
                <input type="text" placeholder="Sous-titre" onChange={(e) => setSubtitle(e.target.value)} />
                <input type="number" placeholder="Année" onChange={(e) => setYear(e.target.value)} />
                <textarea rows="8" type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                <input type="text" placeholder="Url de l'image" onChange={(e) => setImgUrl(e.target.value)} />
                <Button onClick={(e) => handleCreate(e)}>Créer</Button>
                {text}
        </CreateProject>
    )
    if (isLogged) {
        return(
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
                            {data.map((project) => (
                                <ProjectItem
                                    key={project._id}
                                    _id = {project._id}
                                    title = {project.title}
                                    subtitle = {project.subtitle}
                                    year = {project.year}
                                    description = {project.description}
                                    imgUrl = {project.imgUrl}
                                />
                            ))}
                        </tbody>
                    </Table>
                </ContentContainer>
            </Container>
        )
    } else {
        return(
            <Container>
                <Login />
            </Container>
        )
    }

}

export default Admin