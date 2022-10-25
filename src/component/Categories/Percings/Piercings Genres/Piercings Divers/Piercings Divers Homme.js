import React from 'react'
import Pagination from '../../../../Pagination/Pagination'

const Piercings_Divers_Homme = ({returnArticlesPiercingsPiercingsDiversHomme, postsPerPage,ArticlesPiercingsPiercingsDiversHommeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesPiercingsPiercingsDiversHomme}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPiercingsPiercingsDiversHommeLenght} paginate = {paginate}/>   
            </div> 
        </div>
    )
}

export default Piercings_Divers_Homme
