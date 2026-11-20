import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Piercings_Nez_Femme = ({returnArticlesPiercingsPiercingsNezFemme , postsPerPage,ArticlesPiercingsPiercingsNezFemmeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesPiercingsPiercingsNezFemme}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPiercingsPiercingsNezFemmeLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Piercings_Nez_Femme
