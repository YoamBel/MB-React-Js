import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Pendentifs_Plaque_Homme = ({returnArticlesPendentifsPendentifsPlaqueHomme, postsPerPage,ArticlesPendentifsPendentifsPlaqueHommeLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
              {returnArticlesPendentifsPendentifsPlaqueHomme}
            </div>  
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPendentifsPendentifsPlaqueHommeLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Pendentifs_Plaque_Homme
