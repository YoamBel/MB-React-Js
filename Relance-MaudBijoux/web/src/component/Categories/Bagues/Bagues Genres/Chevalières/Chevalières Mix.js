import React from 'react'
import Pagination from '../../../../Pagination/Pagination'

const Chevalières_Mix = ({returnArticlesBaguesChevalieresMix ,postsPerPage,ArticlesBaguesChevalieresMixLenght,paginate}) =>{
    return (
        <div>
            <div className = "container-item">
               {returnArticlesBaguesChevalieresMix}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBaguesChevalieresMixLenght} paginate = {paginate}/>   
            </div> 
        </div>
    )
}

export default Chevalières_Mix
