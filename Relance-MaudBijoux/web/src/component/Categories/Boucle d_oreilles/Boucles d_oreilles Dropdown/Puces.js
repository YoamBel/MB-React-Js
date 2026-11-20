import React  from 'react';
import Pagination from '../../../Pagination/Pagination';
const Puces = ({returnArticlesBoucleDOreillesPuces ,postsPerPage,ArticlesBoucleDOreillesPucesLenght,paginate}) => {
    return (
        <div className = "puce">  
             <div className = "container-item">
               {returnArticlesBoucleDOreillesPuces}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBoucleDOreillesPucesLenght} paginate = {paginate}/>   
            </div>    
        </div>
    )
}

export default Puces;