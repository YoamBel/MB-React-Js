import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Autres_Pendentifs_Homme = ({returnArticlesPendentifsAutresPendentifsHomme , postsPerPage,ArticlesPendentifsAutresPendentifsHommeLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
               {returnArticlesPendentifsAutresPendentifsHomme}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPendentifsAutresPendentifsHommeLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Autres_Pendentifs_Homme
