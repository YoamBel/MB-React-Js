import React from 'react';
import Pagination from '../../Pagination/Pagination';

const Bagues = ({returnArticlesBagues , postsPerPage,ArticlesBaguesLenght,paginate}) => {
   
    
    return (
        <div>
           <div className = "container-item">
               {returnArticlesBagues} 
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBaguesLenght} paginate = {paginate}/>   
            </div>
              
        </div>
        
    )
}

export default Bagues;