import React from 'react'
import Pagination from '../../../../Pagination/Pagination'

const Autres_Boucles_d_oreilles_Homme = ({returnArticlesBoucleDOreillesAtresBoucleDOreillesHomme ,postsPerPage,ArticlesBoucleDOreillesAtresBoucleDOreillesHommeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesBoucleDOreillesAtresBoucleDOreillesHomme}
            </div>  
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBoucleDOreillesAtresBoucleDOreillesHommeLenght} paginate = {paginate}/>   
            </div> 
        </div>
    )
}

export default Autres_Boucles_d_oreilles_Homme
