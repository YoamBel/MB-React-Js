import React from 'react';
import Pagination from '../../Pagination/Pagination';
const Piercings = ({returnArticlesPiercings, postsPerPage,ArticlesPiercingsLenght,paginate}) => {
    
    return (
        <div className = "piercing">  
              <div className = "container-item">
                {returnArticlesPiercings}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPiercingsLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Piercings;