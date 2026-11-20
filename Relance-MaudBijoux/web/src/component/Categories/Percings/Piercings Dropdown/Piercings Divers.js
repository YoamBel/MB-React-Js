import React from 'react';
import Pagination from '../../../Pagination/Pagination';
const Piercings_Divers = ({returnArticlesPiercingsPiercingsDivers , postsPerPage,ArticlesPiercingsPiercingsDiversLenght,paginate}) => {
    return (
        <div className = "pen-relig">  
              <div className = "container-item">
                {returnArticlesPiercingsPiercingsDivers}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPiercingsPiercingsDiversLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Piercings_Divers;