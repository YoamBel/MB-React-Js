import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Pendantes_Homme = ({returnArticlesBoucleDOreillesPendantesHomme ,postsPerPage,ArticlesBoucleDOreillesPendantesHommeLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
                {returnArticlesBoucleDOreillesPendantesHomme}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBoucleDOreillesPendantesHommeLenght} paginate = {paginate}/>   
            </div>  
        </div>
    )
}

export default Pendantes_Homme
