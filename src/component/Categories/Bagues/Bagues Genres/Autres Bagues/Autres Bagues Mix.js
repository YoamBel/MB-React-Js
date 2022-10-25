import React from 'react'
import Pagination from '../../../../Pagination/Pagination'

const Autres_Bagues_Mix = ({returnArticlesBaguesAutresBaguesMix, postsPerPage,ArticlesBaguesAutresBaguesMixLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
                {returnArticlesBaguesAutresBaguesMix}
            </div>  
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBaguesAutresBaguesMixLenght} paginate = {paginate}/>   
            </div>  
        </div>
    )
}

export default Autres_Bagues_Mix
