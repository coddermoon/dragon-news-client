import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSide.css'

const LeftSide = () => {
    const [categories,setCategories]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className='my-3'>
            <h6>Categories : {categories.length}</h6>
            {
                categories.map(category =>
                   <div
                   key={category.id}
                   >
                  
                    <Link
                    
                     to={`category/${category.id}`}>{category.name}</Link><br />
                   </div>
                )
            }
        </div>
    );
};

export default LeftSide;