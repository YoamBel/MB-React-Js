import React from 'react';
import Pagination from '../../../Pagination/Pagination';
const Pendentifs_Plaque = ({returnArticlesPendentifsPendentifsPlaque , postsPerPage,ArticlesPendentifsPendentifsPlaqueLenght,paginate}) => {
    return (
        <div className = "pen-plaque">  
              <div className = "container-item">
              {returnArticlesPendentifsPendentifsPlaque}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPendentifsPendentifsPlaqueLenght} paginate = {paginate}/>   
            </div> 
        </div>
    )
}

export default Pendentifs_Plaque;