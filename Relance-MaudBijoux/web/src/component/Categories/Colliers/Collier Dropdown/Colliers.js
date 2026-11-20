import React from 'react';
import Pagination from '../../../Pagination/Pagination';



const Colliers = ({returnArticlesCollierChainesColliers, postsPerPage,ArticlesCollierChainesColliersLenght,paginate}) => {
    return (
        <div className = "collier">  
             <div className = "container-item">
               {returnArticlesCollierChainesColliers}
            </div>   
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesCollierChainesColliersLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Colliers;