import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Pendentifs_Plaque_Femme = ({returnArticlesPendentifsPendentifsPlaqueFemme, postsPerPage,ArticlesPendentifsPendentifsPlaqueFemmeLenght,paginate}) => {
    return (
        <div>
           <div className = "container-item">
              {returnArticlesPendentifsPendentifsPlaqueFemme}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPendentifsPendentifsPlaqueFemmeLenght} paginate = {paginate}/>   
            </div>  
        </div>
    )
}

export default Pendentifs_Plaque_Femme
