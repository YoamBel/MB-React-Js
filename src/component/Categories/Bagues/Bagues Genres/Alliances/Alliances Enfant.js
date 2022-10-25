import React from 'react'
import Pagination from '../../../../Pagination/Pagination'

const Alliances_Enfant = ({returnArticlesBaguesAlliancesEnfant ,postsPerPage,ArticlesBaguesAlliancesEnfantLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
                {returnArticlesBaguesAlliancesEnfant}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBaguesAlliancesEnfantLenght} paginate = {paginate}/>   
            </div>  
        </div>
    )
}

export default Alliances_Enfant
