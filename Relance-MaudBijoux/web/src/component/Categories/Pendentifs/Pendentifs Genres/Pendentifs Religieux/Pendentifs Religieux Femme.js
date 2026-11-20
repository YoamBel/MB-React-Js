import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Pendentifs_Religieux_Femme = ({returnArticlesPendentifsPendentifsReligieuxFemme, postsPerPage,ArticlesPendentifsPendentifsReligieuxFemmeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesPendentifsPendentifsReligieuxFemme}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPendentifsPendentifsReligieuxFemmeLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Pendentifs_Religieux_Femme
