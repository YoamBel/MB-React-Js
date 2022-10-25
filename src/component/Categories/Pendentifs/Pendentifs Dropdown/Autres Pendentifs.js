import React from 'react';
import Pagination from '../../../Pagination/Pagination';
const Autres_Pendentifs = ({returnArticlesPendentifsAutresPendentifs , postsPerPage,ArticlesPendentifsAutresPendentifsLenght,paginate}) => {
    return (
        <div className = "oth-pen">  
              <div className = "container-item">
               {returnArticlesPendentifsAutresPendentifs}
            </div>  
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPendentifsAutresPendentifsLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Autres_Pendentifs;