import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Autres_Bracelets_Homme = ({returnArticlesBraceletsAutresBraceletsHomme, postsPerPage,ArticlesBraceletsAutresBraceletsHommeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesBraceletsAutresBraceletsHomme}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBraceletsAutresBraceletsHommeLenght} paginate = {paginate}/>   
            </div>   
        </div>
    )
}

export default Autres_Bracelets_Homme
