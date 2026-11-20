import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Bracelets_Identité_Femme = ({returnArticlesBraceletsIdentiteFemme, postsPerPage,ArticlesBraceletsIdentiteFemmeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
               {returnArticlesBraceletsIdentiteFemme}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBraceletsIdentiteFemmeLenght} paginate = {paginate}/>   
            </div> 
        </div>
    )
}

export default Bracelets_Identité_Femme
