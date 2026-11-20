import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Pendentifs_Religieux_Homme = ({returnArticlesPendentifsPendentifsReligieuxHomme, postsPerPage,ArticlesPendentifsPendentifsReligieuxHommeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesPendentifsPendentifsReligieuxHomme}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPendentifsPendentifsReligieuxHommeLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Pendentifs_Religieux_Homme
