import React from 'react';
import Pagination from '../../Pagination/Pagination';
const Parures = ({returnArticlesParures , postsPerPage,ArticlesParuresLenght,paginate}) => {
    return (
        <div className = "parure">  
            <div className = "container-item">
                {returnArticlesParures}
            </div>  
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesParuresLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Parures;