import React from 'react';
import Pagination from '../../../Pagination/Pagination';
const Bracelets_Rigides = ({returnArticlesBraceletsRigides, postsPerPage,ArticlesBraceletsRigidesLenght,paginate}) => {
    return (
        <div className = "bra-reg">  
             <div className = "container-item">
               {returnArticlesBraceletsRigides}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBraceletsRigidesLenght} paginate = {paginate}/>   
            </div>     
        </div>
    )
}

export default Bracelets_Rigides;