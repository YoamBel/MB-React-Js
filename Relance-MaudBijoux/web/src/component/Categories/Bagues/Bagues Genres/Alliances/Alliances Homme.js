import React from 'react'
import Pagination from '../../../../Pagination/Pagination'

const Alliances_Homme = ({returnArticlesBaguesAlliancesHomme, postsPerPage,ArticlesBaguesAlliancesHommeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesBaguesAlliancesHomme}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBaguesAlliancesHommeLenght} paginate = {paginate}/>   
            </div>  
        </div>
    )
}

export default Alliances_Homme
