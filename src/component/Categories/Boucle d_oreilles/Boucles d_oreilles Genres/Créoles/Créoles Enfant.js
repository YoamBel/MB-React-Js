import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Créoles_Enfant = ({returnArticlesBoucleDOreillesCreolesEnfant ,postsPerPage,ArticlesBoucleDOreillesCreolesEnfantLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesBoucleDOreillesCreolesEnfant}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBoucleDOreillesCreolesEnfantLenght} paginate = {paginate}/>   
            </div>       
        </div>
    )
}

export default Créoles_Enfant
