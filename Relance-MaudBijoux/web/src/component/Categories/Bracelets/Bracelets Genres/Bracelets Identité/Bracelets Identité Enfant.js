import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Bracelets_Identité_Enfant = ({returnArticlesBraceletsIdentiteEnfant, postsPerPage,ArticlesBraceletsIdentiteEnfantLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
               {returnArticlesBraceletsIdentiteEnfant}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBraceletsIdentiteEnfantLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Bracelets_Identité_Enfant
