import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Piercings_Divers_Femme = ({returnArticlesPiercingsPiercingsDiversFemme, postsPerPage,ArticlesPiercingsPiercingsDiversFemmeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesPiercingsPiercingsDiversFemme}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPiercingsPiercingsDiversFemmeLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Piercings_Divers_Femme
