import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Créoles_Mix = ({returnArticlesBoucleDOreillesCreolesMix ,postsPerPage,ArticlesBoucleDOreillesCreolesMixLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesBoucleDOreillesCreolesMix}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBoucleDOreillesCreolesMixLenght} paginate = {paginate}/>   
            </div>      
        </div>
    )
}

export default Créoles_Mix
