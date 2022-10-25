import React from 'react'
import Pagination from '../../../../Pagination/Pagination'

const Autres_Boucles_d_oreilles_Femme = ({returnArticlesBoucleDOreillesAtresBoucleDOreillesFemme,postsPerPage,ArticlesBoucleDOreillesAtresBoucleDOreillesFemmeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesBoucleDOreillesAtresBoucleDOreillesFemme}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBoucleDOreillesAtresBoucleDOreillesFemmeLenght} paginate = {paginate}/>   
            </div>  
        </div>
    )
}

export default Autres_Boucles_d_oreilles_Femme
