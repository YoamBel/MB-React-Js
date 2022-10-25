import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Bracelets_Identité_Homme = ({returnArticlesBraceletsIdentiteHomme, postsPerPage,ArticlesBraceletsIdentiteHommeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
               {returnArticlesBraceletsIdentiteHomme}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBraceletsIdentiteHommeLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Bracelets_Identité_Homme
