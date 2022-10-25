import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Autres_Bracelets_Femme = ({returnArticlesBraceletsAutresBraceletsFemme, postsPerPage,ArticlesBraceletsAutresBraceletsFemmeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesBraceletsAutresBraceletsFemme}
            </div>  
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBraceletsAutresBraceletsFemmeLenght} paginate = {paginate}/>   
            </div> 
        </div>
    )
}

export default Autres_Bracelets_Femme
