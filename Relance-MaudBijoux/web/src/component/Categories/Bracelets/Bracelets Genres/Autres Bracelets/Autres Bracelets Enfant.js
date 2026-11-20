import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Autres_Bracelets_Enfant = ({returnArticlesBraceletsAutresBraceletsEnfant, postsPerPage,ArticlesBraceletsAutresBraceletsEnfantLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesBraceletsAutresBraceletsEnfant}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBraceletsAutresBraceletsEnfantLenght} paginate = {paginate}/>   
            </div>   
        </div>
    )
}

export default Autres_Bracelets_Enfant
