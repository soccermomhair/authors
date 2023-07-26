import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import ProductForm from '../components/ProductForm';
import AuthorList from './AuthorList';
const Main = (props) => {
    //why is this [] again???
    // const [allauthors, setAllAuthors] = useState([]);

    return (
        //now ProductForm and ProductList can both utilize the getter and setter from this, their parent component

        <div>

            {/* <AuthorList allauthors={allauthors} setAllAuthors={setAllAuthors} /> */}
        </div>
    )
}
export default Main;