import React from 'react'
import Pagination from '../../../../Pagination/Pagination'

const Autres_Boucles_d_oreilles_Mix = ({returnArticlesBoucleDOreillesAtresBoucleDOreillesMix ,postsPerPage,ArticlesBoucleDOreillesAtresBoucleDOreillesMixLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesBoucleDOreillesAtresBoucleDOreillesMix}
            </div>  
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBoucleDOreillesAtresBoucleDOreillesMixLenght} paginate = {paginate}/>   
            </div> 
        </div>
    )
}

export default Autres_Boucles_d_oreilles_Mix

