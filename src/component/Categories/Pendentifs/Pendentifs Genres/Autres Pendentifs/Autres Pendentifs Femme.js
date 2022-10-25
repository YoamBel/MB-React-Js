import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Autres_Pendentifs_Femme = ({returnArticlesPendentifsAutresPendentifsFemme , postsPerPage,ArticlesPendentifsAutresPendentifsFemmeLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
               {returnArticlesPendentifsAutresPendentifsFemme}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPendentifsAutresPendentifsFemmeLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Autres_Pendentifs_Femme
