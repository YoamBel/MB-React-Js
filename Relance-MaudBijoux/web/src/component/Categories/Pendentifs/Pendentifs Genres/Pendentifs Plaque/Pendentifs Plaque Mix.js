import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Pendentifs_Plaque_Mix = ({returnArticlesPendentifsPendentifsPlaqueMix, postsPerPage,ArticlesPendentifsPendentifsPlaqueMixLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
              {returnArticlesPendentifsPendentifsPlaqueMix}
            </div>  
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPendentifsPendentifsPlaqueMixLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Pendentifs_Plaque_Mix
