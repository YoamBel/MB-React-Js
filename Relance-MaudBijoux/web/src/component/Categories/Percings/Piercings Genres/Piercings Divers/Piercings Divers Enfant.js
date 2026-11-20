import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Piercings_Divers_Enfant = ({returnArticlesPiercingsPiercingsDiversEnfant, postsPerPage,ArticlesPiercingsPiercingsDiversEnfantLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesPiercingsPiercingsDiversEnfant}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPiercingsPiercingsDiversEnfantLenght} paginate = {paginate}/>   
            </div> 
        </div>
    )
}

export default Piercings_Divers_Enfant
