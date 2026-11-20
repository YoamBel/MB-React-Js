import React from 'react'
import Pagination from '../../../../Pagination/Pagination'

const Chevalières_Femme = ({returnArticlesBaguesChevalieresFemme ,postsPerPage,ArticlesBaguesChevalieresFemmeLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
               {returnArticlesBaguesChevalieresFemme}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBaguesChevalieresFemmeLenght} paginate = {paginate}/>   
            </div> 
        </div>
    )
}

export default Chevalières_Femme
