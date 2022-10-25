import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Solitaires_Mix = ({returnArticlesBaguesSolitairesMix, postsPerPage,ArticlesBaguesSolitairesMixLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
               {returnArticlesBaguesSolitairesMix}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBaguesSolitairesMixLenght} paginate = {paginate}/>   
            </div>   
        </div>
    )
}

export default Solitaires_Mix
