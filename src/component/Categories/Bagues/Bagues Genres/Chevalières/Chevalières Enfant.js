import React from 'react'
import Pagination from '../../../../Pagination/Pagination'

const Chevalières_Enfant = ({returnArticlesBaguesChevalieresEnfant ,postsPerPage,ArticlesBaguesChevalieresEnfantLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
               {returnArticlesBaguesChevalieresEnfant}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBaguesChevalieresEnfantLenght} paginate = {paginate}/>   
            </div> 
        </div>
    )
}

export default Chevalières_Enfant
