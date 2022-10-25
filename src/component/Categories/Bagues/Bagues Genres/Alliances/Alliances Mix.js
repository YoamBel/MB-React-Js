import React from 'react'
import Pagination from '../../../../Pagination/Pagination'

const Alliances_Mix = ({returnArticlesBaguesAlliancesMix, postsPerPage,ArticlesBaguesAlliancesMixLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesBaguesAlliancesMix}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBaguesAlliancesMixLenght} paginate = {paginate}/>   
            </div>   
        </div>
    )
}

export default Alliances_Mix
