import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Pendantes_Mix = ({returnArticlesBoucleDOreillesPendantesMix ,postsPerPage,ArticlesBoucleDOreillesPendantesMixLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
                {returnArticlesBoucleDOreillesPendantesMix}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBoucleDOreillesPendantesMixLenght} paginate = {paginate}/>   
            </div>  
        </div>
    )
}

export default Pendantes_Mix
