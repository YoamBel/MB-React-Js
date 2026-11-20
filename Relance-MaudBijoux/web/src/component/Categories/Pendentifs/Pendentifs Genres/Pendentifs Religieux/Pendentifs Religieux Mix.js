import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Pendentifs_Religieux_Mix = ({returnArticlesPendentifsPendentifsReligieuxMix, postsPerPage,ArticlesPendentifsPendentifsReligieuxMixLenght,paginate}) => {
    return (
        <div>
           <div className = "container-item">
                {returnArticlesPendentifsPendentifsReligieuxMix}
            </div>   
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPendentifsPendentifsReligieuxMixLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Pendentifs_Religieux_Mix
