import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Colliers_Mix = ({returnArticlesCollierChainesColliersMix, postsPerPage,ArticlesCollierChainesColliersMixLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
               {returnArticlesCollierChainesColliersMix}
            </div>  
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesCollierChainesColliersMixLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Colliers_Mix
