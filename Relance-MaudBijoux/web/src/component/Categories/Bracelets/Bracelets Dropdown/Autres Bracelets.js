import React from 'react';
import Pagination from '../../../Pagination/Pagination';


const Autres_Bracelets = ({returnArticlesBraceletsAutresBracelets, postsPerPage,ArticlesBraceletsAutresBraceletsLenght,paginate}) => {
    return (
        <div className = "oth-bra">  
             <div className = "container-item">
                {returnArticlesBraceletsAutresBracelets}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBraceletsAutresBraceletsLenght} paginate = {paginate}/>   
            </div>     
        </div>
    )
}

export default Autres_Bracelets;