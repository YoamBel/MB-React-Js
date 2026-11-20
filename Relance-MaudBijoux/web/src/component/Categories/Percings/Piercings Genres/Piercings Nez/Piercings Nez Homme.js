import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Piercings_Nez_Homme = ({returnArticlesPiercingsPiercingsNezHomme , postsPerPage,ArticlesPiercingsPiercingsNezHommeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesPiercingsPiercingsNezHomme}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPiercingsPiercingsNezHommeLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Piercings_Nez_Homme
