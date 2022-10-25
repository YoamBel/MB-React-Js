import React  from 'react';
import Pagination from '../../../Pagination/Pagination';
const Créoles = ({returnArticlesBoucleDOreillesCreoles ,postsPerPage,ArticlesBoucleDOreillesCreolesLenght,paginate}) => {
    return (
        <div className = "creole">  
             <div className = "container-item">
                {returnArticlesBoucleDOreillesCreoles}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBoucleDOreillesCreolesLenght} paginate = {paginate}/>   
            </div>    
        </div>
    )
}

export default Créoles;