import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Autres_Bracelets_Mix = ({returnArticlesBraceletsAutresBraceletsMix, postsPerPage,ArticlesBraceletsAutresBraceletsMixLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesBraceletsAutresBraceletsMix}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBraceletsAutresBraceletsMixLenght} paginate = {paginate}/>   
            </div>  
        </div>
    )
}

export default Autres_Bracelets_Mix
