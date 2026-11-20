import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Pendentifs_Plaque_Enfant = ({returnArticlesPendentifsPendentifsPlaqueEnfant, postsPerPage,ArticlesPendentifsPendentifsPlaqueEnfantLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
              {returnArticlesPendentifsPendentifsPlaqueEnfant}
            </div>  
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPendentifsPendentifsPlaqueEnfantLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Pendentifs_Plaque_Enfant
