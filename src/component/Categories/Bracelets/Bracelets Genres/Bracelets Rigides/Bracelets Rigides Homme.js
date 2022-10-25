import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Bracelets_Rigides_Homme = ({returnArticlesBraceletsRigidesHomme, postsPerPage,ArticlesBraceletsRigidesHommeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
               {returnArticlesBraceletsRigidesHomme}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBraceletsRigidesHommeLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Bracelets_Rigides_Homme
