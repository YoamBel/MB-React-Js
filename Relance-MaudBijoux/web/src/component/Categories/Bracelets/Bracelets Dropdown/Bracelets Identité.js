import React from 'react';
import Pagination from '../../../Pagination/Pagination';

const Bracelets_Identité = ({returnArticlesBraceletsIdentite, postsPerPage,ArticlesBraceletsIdentiteLenght,paginate}) => {
    return (
        <div className = "bra-iden">  
            <div className = "container-item">
               {returnArticlesBraceletsIdentite}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBraceletsIdentiteLenght} paginate = {paginate}/>   
            </div>     
        </div>
    )
}

export default Bracelets_Identité;