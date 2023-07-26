import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const AuthorList = () => {

    const [allAuthors, setAllAuthors] = useState([]);
    // const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/authors")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAllAuthors(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteFilter = (struckId) => {
        axios.delete(`http://localhost:8000/api/authors/${struckId}`)
            .then((res) => {
                console.log(res.data);
                const filteredList = allAuthors.filter((author, index) => author._id !== struckId);
                setAllAuthors(filteredList);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <div>
            <p>We have quotes by:</p>
            <Link to="/authors/new">Add an author</Link>
            {
                <table>
                    <thead>
                        <tr>
                            <th> Author</th>
                            <th> Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allAuthors.map((author, index) => (
                                <tr key={author._id}>
                                    <td>{author.name}</td>
                                    <td>
                                        <Link to={`${author._id}/edit`}><button>Edit</button></Link>
                                        |
                                        <button onClick={() => deleteFilter(author._id)}> Delete </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }


        </div >
    );
}
export default AuthorList;