import React from 'react';
import Pagination from '../../../Pagination/Pagination';
const Pendantes = ({returnArticlesBoucleDOreillesPendantes ,postsPerPage,ArticlesBoucleDOreillesPendantesLenght,paginate}) => {

    return (
        <div className = "pendentif">  
             <div className = "container-item">
                {returnArticlesBoucleDOreillesPendantes}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBoucleDOreillesPendantesLenght} paginate = {paginate}/>   
            </div>    
        </div>
    )
}

export default Pendantes;