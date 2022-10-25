import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Bracelets_Identité_Mix = ({returnArticlesBraceletsIdentiteMix, postsPerPage,ArticlesBraceletsIdentiteMixLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
               {returnArticlesBraceletsIdentiteMix}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBraceletsIdentiteMixLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Bracelets_Identité_Mix
