import React from 'react';
import Pagination from '../../../Pagination/Pagination';
const Pendentifs_Religieux = ({returnArticlesPendentifsPendentifsReligieux , postsPerPage,ArticlesPendentifsPendentifsReligieuxLenght,paginate}) => {
    return (
        <div className = "pen-relig">  
              <div className = "container-item">
                {returnArticlesPendentifsPendentifsReligieux}
            </div>  
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPendentifsPendentifsReligieuxLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Pendentifs_Religieux;