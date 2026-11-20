import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Pendantes_Femme = ({returnArticlesBoucleDOreillesPendantesFemme ,postsPerPage,ArticlesBoucleDOreillesPendantesFemmeLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
                {returnArticlesBoucleDOreillesPendantesFemme}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBoucleDOreillesPendantesFemmeLenght} paginate = {paginate}/>   
            </div>  
        </div>
    )
}

export default Pendantes_Femme
