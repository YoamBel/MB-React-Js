import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Créoles_Femme = ({returnArticlesBoucleDOreillesCreolesFemme ,postsPerPage,ArticlesBoucleDOreillesCreolesFemmeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesBoucleDOreillesCreolesFemme}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBoucleDOreillesCreolesFemmeLenght} paginate = {paginate}/>   
            </div>      
        </div>
    )
}

export default Créoles_Femme
