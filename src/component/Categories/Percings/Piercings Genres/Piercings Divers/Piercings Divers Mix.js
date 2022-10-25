import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Piercings_Divers_Mix = ({returnArticlesPiercingsPiercingsDiversMix, postsPerPage,ArticlesPiercingsPiercingsDiversMixLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
                {returnArticlesPiercingsPiercingsDiversMix}
            </div>  
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPiercingsPiercingsDiversMixLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Piercings_Divers_Mix
