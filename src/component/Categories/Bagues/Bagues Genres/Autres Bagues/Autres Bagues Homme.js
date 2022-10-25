import React from 'react'
import Pagination from '../../../../Pagination/Pagination'

const Autres_Bagues_Homme = ({returnArticlesBaguesAutresBaguesHomme, postsPerPage,ArticlesBaguesAutresBaguesHommeLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
                {returnArticlesBaguesAutresBaguesHomme}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBaguesAutresBaguesHommeLenght} paginate = {paginate}/>   
            </div>   
        </div>
    )
}

export default Autres_Bagues_Homme
