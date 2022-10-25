import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Pendantes_Enfant = ({returnArticlesBoucleDOreillesPendantesEnfant ,postsPerPage,ArticlesBoucleDOreillesPendantesEnfantLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
                {returnArticlesBoucleDOreillesPendantesEnfant}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBoucleDOreillesPendantesEnfantLenght} paginate = {paginate}/>   
            </div>  
        </div>
    )
}

export default Pendantes_Enfant
