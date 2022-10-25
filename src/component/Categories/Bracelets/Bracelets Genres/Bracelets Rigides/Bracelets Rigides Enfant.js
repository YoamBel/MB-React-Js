import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Bracelets_Rigides_Enfant = ({returnArticlesBraceletsRigidesEnfant, postsPerPage,ArticlesBraceletsRigidesEnfantLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
               {returnArticlesBraceletsRigidesEnfant}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBraceletsRigidesEnfantLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Bracelets_Rigides_Enfant
