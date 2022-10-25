import React from 'react';
import Pagination from '../../../Pagination/Pagination';


const Alliances = ({returnArticlesBaguesAlliances, postsPerPage,ArticlesBaguesAlliancesLenght,paginate}) => {
    
    return (
        <div className = "alliance">  
             <div className = "container-item">
                {returnArticlesBaguesAlliances}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBaguesAlliancesLenght} paginate = {paginate}/>   
            </div>   
        </div>
    )
}

export default Alliances;