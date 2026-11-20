import React from 'react'
import Pagination from '../../../../Pagination/Pagination'

const Autres_Boucles_d_oreilles_Enfant = ({returnArticlesBoucleDOreillesAtresBoucleDOreillesEnfant,postsPerPage,ArticlesBoucleDOreillesAtresBoucleDOreillesEnfantLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesBoucleDOreillesAtresBoucleDOreillesEnfant}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBoucleDOreillesAtresBoucleDOreillesEnfantLenght} paginate = {paginate}/>   
            </div>   
        </div>
    )
}

export default Autres_Boucles_d_oreilles_Enfant
