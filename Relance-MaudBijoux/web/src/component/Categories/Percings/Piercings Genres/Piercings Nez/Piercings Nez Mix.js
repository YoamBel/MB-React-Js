import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Piercings_Nez_Mix = ({returnArticlesPiercingsPiercingsNezMix , postsPerPage,ArticlesPiercingsPiercingsNezMixLenght,paginate}) => {
    return (
        <div>
           <div className = "container-item">
                {returnArticlesPiercingsPiercingsNezMix}
            </div>  
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPiercingsPiercingsNezMixLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Piercings_Nez_Mix
