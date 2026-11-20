import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Solitaires_Enfant = ({returnArticlesBaguesSolitairesEnfant, postsPerPage,ArticlesBaguesSolitairesEnfantLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
               {returnArticlesBaguesSolitairesEnfant}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBaguesSolitairesEnfantLenght} paginate = {paginate}/>   
            </div>    
        </div>
    )
}

export default Solitaires_Enfant
