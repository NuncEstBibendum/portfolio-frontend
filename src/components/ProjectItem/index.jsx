import { useState } from "react/cjs/react.development";
import styled from "styled-components";

const Button = styled.button`
    padding: 3px 10px;
`

function ProjectItem({ _id, title, subtitle, year, description, imgUrl }) {
    const [text, setText] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(title);
    const [editSubtitle, setEditSubtitle] = useState(subtitle);
    const [editYear, setEditYear] = useState(year);
    const [editDescription, setEditDescription] = useState(description);
    const [editImgUrl, setEditImgUrl] = useState(imgUrl);

    // --------------- Start handleDelete() function --------------- //
    const handleDelete = async (e) => {
        e.preventDefault();

        fetch(`https://portfolio-julien-gg.herokuapp.com/api/project/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            },
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
            setText('Vous avez supprimé le projet avec succès.');
            window.location.reload(false);
        })
        .catch(error => {
            if(error.response) {
                console.log("Une erreur s'est produite: ", error.response)
            }
        });
    }
    // --------------- End handleDelete() function --------------- //

    // --------------- Start handleEdit() function --------------- //
    const handleEdit = async (e) => {
        e.preventDefault();

        fetch(`https://portfolio-julien-gg.herokuapp.com/api/project/${_id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            },
            body: JSON.stringify({
                title: editTitle,
                subtitle: editSubtitle,
                year: editYear,
                description: editDescription,
                imgUrl: editImgUrl
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
            setIsEditing(!isEditing);
            setText('Le projet a été modifié avec succès.');
            window.location.reload(false);
        })
        .catch(error => {
            if(error.response) {
                console.log("Une erreur s'est produite: ", error.response)
            }
        });
    }
    // --------------- End handleEdit() function --------------- //

    if (isEditing) {
        return(
            <tr>
                <td><input type="text" defaultValue={title} onChange={(e) => setEditTitle(e.target.value)}/></td>
                <td><input type="text" defaultValue={subtitle} onChange={(e) => setEditSubtitle(e.target.value)} /></td>
                <td><input type="number" defaultValue={year} onChange={(e) => setEditYear(e.target.value)} /></td>
                <td><textarea rows="8" type="text" defaultValue={description} onChange={(e) => setEditDescription(e.target.value)} /></td>
                <td><input type="text" defaultValue={imgUrl} onChange={(e) => setEditImgUrl(e.target.value)} /></td>
                <td><Button onClick={(e) => handleEdit(e)}>Valider</Button></td>
            </tr>
        )
    }  else {
        return(
            <tr>
                <td>{title}</td>
                <td>{subtitle}</td>
                <td>{year}</td>
                <td>{description}</td>
                <td>{imgUrl}</td>
                <td><Button onClick={() => setIsEditing(!isEditing)}>Modifier</Button><Button onClick={(e) => handleDelete(e)}>Supprimer</Button></td>
                {text}
            </tr>
        )
    }

}

export default ProjectItem;