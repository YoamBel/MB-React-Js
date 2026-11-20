import React from 'react';
import Pagination from '../../../Pagination/Pagination';
const Autres_Boucles_d_oreilles = ({returnArticlesBoucleDOreillesAtresBoucleDOreilles ,postsPerPage,ArticlesBoucleDOreillesAtresBoucleDOreillesLenght,paginate}) => {
    return (
        <div className = "oth-bo">  
             <div className = "container-item">
                {returnArticlesBoucleDOreillesAtresBoucleDOreilles}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBoucleDOreillesAtresBoucleDOreillesLenght} paginate = {paginate}/>   
            </div>    
        </div>
    )
}

export default Autres_Boucles_d_oreilles;