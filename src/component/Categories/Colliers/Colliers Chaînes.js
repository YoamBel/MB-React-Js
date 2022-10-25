import React from 'react';
import Pagination from '../../Pagination/Pagination';

const Colliers_Chaînes = ({returnArticlesCollierChaines, postsPerPage,ArticlesCollierChainesLenght,paginate}) => {
    return (
        <div className = "col-chn">  
             <div className = "container-item">
                {returnArticlesCollierChaines}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesCollierChainesLenght} paginate = {paginate}/>   
            </div>  
        </div>
    )
}

export default Colliers_Chaînes
