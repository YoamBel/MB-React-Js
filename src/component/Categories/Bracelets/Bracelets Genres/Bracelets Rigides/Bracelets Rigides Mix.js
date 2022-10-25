import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Bracelets_Rigides_Mix = ({returnArticlesBraceletsRigidesMix, postsPerPage,ArticlesBraceletsRigidesMixLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
               {returnArticlesBraceletsRigidesMix}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBraceletsRigidesMixLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Bracelets_Rigides_Mix
