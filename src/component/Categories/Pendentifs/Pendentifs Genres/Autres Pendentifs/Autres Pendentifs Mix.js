import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Autres_Pendentifs_Mix = ({returnArticlesPendentifsAutresPendentifsMix , postsPerPage,ArticlesPendentifsAutresPendentifsMixLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
               {returnArticlesPendentifsAutresPendentifsMix}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPendentifsAutresPendentifsMixLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Autres_Pendentifs_Mix
