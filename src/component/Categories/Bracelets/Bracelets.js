import React from 'react';
import Pagination from '../../Pagination/Pagination';
const Bracelets = ({returnArticlesBracelets , postsPerPage,ArticlesBraceletsLenght,paginate}) => {
    return (
        <div className = "bracelet">  
             <div className = "container-item">
                {returnArticlesBracelets}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBraceletsLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Bracelets;


/*

*/