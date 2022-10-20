import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../shared/NewsCard/NewsCard';


const Category = () => {
    const allNews = useLoaderData()
    
    return (
        <div>
           <h5>total News : {allNews.length}</h5>
           {
            allNews.map(news=> <NewsCard
            key={news._id}
            news= {news}
            />)
           }
        </div>
    );
};

export default Category;