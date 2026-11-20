import React from 'react';
import Pagination from '../../../Pagination/Pagination';
const Autres_Bagues = ({returnArticlesBaguesAutresBagues , postsPerPage,ArticlesBaguesAutresBaguesLenght,paginate}) => {

    return (
        <div className = "oth-bg">  
             <div className = "container-item">
                {returnArticlesBaguesAutresBagues}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBaguesAutresBaguesLenght} paginate = {paginate}/>   
            </div>    
        </div>
    )
}

export default Autres_Bagues;