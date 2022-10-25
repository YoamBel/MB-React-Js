import React from 'react'
import Pagination from '../../../../Pagination/Pagination'

const Autres_Bagues_Enfant = ({returnArticlesBaguesAutresBaguesEnfant , postsPerPage,ArticlesBaguesAutresBagueEnfantLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
                {returnArticlesBaguesAutresBaguesEnfant}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBaguesAutresBagueEnfantLenght} paginate = {paginate}/>   
            </div>    
        </div>
    )
}

export default Autres_Bagues_Enfant
