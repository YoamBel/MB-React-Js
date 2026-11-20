import React from 'react';
import Pagination from '../../Pagination/Pagination';

const Boucles_d_oreilles = ({returnArticlesBoucleDOreilles ,postsPerPage,ArticlesBoucleDOreillesLenght,paginate}) => {
    return (
        <div className = "boucle-oreille">  
            <div className = "container-item">
                {returnArticlesBoucleDOreilles}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBoucleDOreillesLenght} paginate = {paginate}/>   
            </div>   
        </div>
    )
}

export default Boucles_d_oreilles;