import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthorSubmit = (props) => {
    const { initialName, onSubmitProp } = props
    const [errors, setErrors] = useState({});
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {
            name
        })
            .then(res => {
                navigate('/authors')
                console.log(res);
                console.log(res.data);
                setAllAuthors([...allAuthors, res.data]);
                //updates the lifted state of allProducts to include the current ones in State in addition to the new one from a post request

            })
            .catch((err) => {
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div>
            <p>Add a new author:</p>
            <Link to='/authors'>Home</Link>
            <form onSubmit={onSubmitHandler}>

                <div className='form-fields'>
                    <label>Name</label>
                    <br />
                    <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
                    {errors.name ? <p>{errors.name.message}</p> : null}
                </div>
                <button><Link to="/authors">Cancel</Link></button>
                <input type='submit' />

            </form>
        </div>
    )

}
export default AuthorSubmit;