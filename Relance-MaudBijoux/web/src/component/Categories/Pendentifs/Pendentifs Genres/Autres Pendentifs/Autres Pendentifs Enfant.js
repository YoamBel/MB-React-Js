import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Autres_Pendentifs_Enfant = ({returnArticlesPendentifsAutresPendentifsEnfant , postsPerPage,ArticlesPendentifsAutresPendentifsEnfantLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
               {returnArticlesPendentifsAutresPendentifsEnfant}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPendentifsAutresPendentifsEnfantLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Autres_Pendentifs_Enfant
