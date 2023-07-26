import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import AuthorSubmit from './AuthorSubmit';
// import DeleteButton from './DeleteButton';
const AuthorEdit = (props) => {
    const { id } = useParams();
    const [authorName, setAuthorName] = useState("");
    const [errors, setErrors] = useState({});
    const [authorNotFoundError, setAuthorNotFoundError] = useState("");
    // const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                console.log(res.data)
                setAuthorName(res.data.name);
                // setLoaded(true)
            })
            .catch((err) => {
                console.log(err.response);
                setAuthorNotFoundError('Author not found using that id')
            })
    }, [])
    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id,
            { name: authorName })
            .then
            (res => {
                navigate('/authors')
                console.log(res)
            })
            .catch(err => {
                console.log(err.response.data.error.errors);
                setErrors(err.response.data.error.errors);
            });
    }
    return (
        <div>
            <p>Edit this author</p>
            <form onSubmit={updateAuthor}>
                {authorNotFoundError ? (
                    <h2>
                        {authorNotFoundError} <Link to="/authors/new">Click here to add author</Link>
                    </h2>
                ) : null}
                {/* <Link to="/authors">Home</Link> */}
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type="text" id="name" value={authorName} onChange={(e) => setAuthorName(e.target.value)}></input>
                    {errors.name ? <p>{errors.name.message}</p> : null}
                </div>
                <button type="submit">Submit</button>
            </form>
            {/* {
                loaded && (
                    <>
                        <AuthorSubmit onSubmitProp={updateAuthor} initialName={author.name} />

                    </>
                )} */}
        </div>
    )
}
export default AuthorEdit;

