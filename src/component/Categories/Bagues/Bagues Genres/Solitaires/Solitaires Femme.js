import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Solitaires_Femme = ({returnArticlesBaguesSolitairesFemme, postsPerPage,ArticlesBaguesSolitairesFemmeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
               {returnArticlesBaguesSolitairesFemme}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBaguesSolitairesFemmeLenght} paginate = {paginate}/>   
            </div>    
        </div>
    )
}

export default Solitaires_Femme
