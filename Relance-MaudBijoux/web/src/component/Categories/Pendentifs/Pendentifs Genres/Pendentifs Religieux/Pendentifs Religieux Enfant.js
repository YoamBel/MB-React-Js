import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Pendentifs_Religieux_Enfant = ({returnArticlesPendentifsPendentifsReligieuxEnfant , postsPerPage,ArticlesPendentifsPendentifsReligieuxEnfantLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
                {returnArticlesPendentifsPendentifsReligieuxEnfant}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPendentifsPendentifsReligieuxEnfantLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Pendentifs_Religieux_Enfant
