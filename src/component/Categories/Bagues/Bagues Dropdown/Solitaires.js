import React from 'react';
import Pagination from '../../../Pagination/Pagination';
const Solitaires = ({returnArticlesBaguesSolitaires , postsPerPage,ArticlesBaguesSolitairesLenght,paginate}) => {
    

    return (
        <div className = "solitaire">  
             <div className = "container-item">
               {returnArticlesBaguesSolitaires}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBaguesSolitairesLenght} paginate = {paginate}/>   
            </div>    
        </div>
    )
}

export default Solitaires;