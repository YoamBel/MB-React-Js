import React from 'react';
import Pagination from '../../../Pagination/Pagination';
const Chevalières = ({returnArticlesBaguesChevalieres ,postsPerPage,ArticlesBaguesChevalieresLenght,paginate}) => {
   

    return (
        <div className = "chevaliere">  
             <div className = "container-item">
               {returnArticlesBaguesChevalieres}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBaguesChevalieresLenght} paginate = {paginate}/>   
            </div>    
        </div>
    )
}

export default Chevalières;