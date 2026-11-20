import React from 'react'
import Pagination from '../../../../Pagination/Pagination'

const Autres_Bagues_Femme = ({returnArticlesBaguesAutresBaguesFemme, postsPerPage,ArticlesBaguesAutresBaguesFemmeLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
                {returnArticlesBaguesAutresBaguesFemme}
            </div>   
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBaguesAutresBaguesFemmeLenght} paginate = {paginate}/>   
            </div> 
        </div>
    )
}

export default Autres_Bagues_Femme
