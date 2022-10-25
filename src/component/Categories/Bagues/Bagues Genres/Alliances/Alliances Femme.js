import React from 'react'
import Pagination from '../../../../Pagination/Pagination'

const Alliances_Femme = ({returnArticlesBaguesAlliancesFemme, postsPerPage,ArticlesBaguesAlliancesFemmeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesBaguesAlliancesFemme}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBaguesAlliancesFemmeLenght} paginate = {paginate}/>   
            </div>   
        </div>
    )
}

export default Alliances_Femme
