import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Solitaires_Homme = ({returnArticlesBaguesSolitairesHomme, postsPerPage,ArticlesBaguesSolitairesHommeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
               {returnArticlesBaguesSolitairesHomme}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBaguesSolitairesHommeLenght} paginate = {paginate}/>   
            </div>    
        </div>
    )
}

export default Solitaires_Homme
