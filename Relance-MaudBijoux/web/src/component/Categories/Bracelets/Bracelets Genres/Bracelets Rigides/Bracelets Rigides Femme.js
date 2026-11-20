import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Bracelets_Rigides_Femme = ({returnArticlesBraceletsRigidesFemme, postsPerPage,ArticlesBraceletsRigidesFemmeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
               {returnArticlesBraceletsRigidesFemme}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBraceletsRigidesFemmeLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Bracelets_Rigides_Femme
