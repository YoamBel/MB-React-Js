import React from 'react';
import Pagination from '../../../Pagination/Pagination';
const Piercings_Nez = ({returnArticlesPiercingsPiercingsNez , postsPerPage,ArticlesPiercingsPiercingsNezLenght,paginate}) => {
    
    return (
        <div className = "pen-relig">  
              <div className = "container-item">
                {returnArticlesPiercingsPiercingsNez}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPiercingsPiercingsNezLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Piercings_Nez;
