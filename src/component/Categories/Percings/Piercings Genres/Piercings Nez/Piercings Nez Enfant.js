import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Piercings_Nez_Enfant = ({returnArticlesPiercingsPiercingsNezEnfant , postsPerPage,ArticlesPiercingsPiercingsNezEnfantLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesPiercingsPiercingsNezEnfant}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPiercingsPiercingsNezEnfantLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Piercings_Nez_Enfant
