import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Créoles_Homme = ({returnArticlesBoucleDOreillesCreolesHomme ,postsPerPage,ArticlesBoucleDOreillesCreolesHommeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesBoucleDOreillesCreolesHomme}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBoucleDOreillesCreolesHommeLenght} paginate = {paginate}/>   
            </div>      
        </div>
    )
}

export default Créoles_Homme
