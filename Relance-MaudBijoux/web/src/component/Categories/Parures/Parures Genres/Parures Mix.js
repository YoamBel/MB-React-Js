import React from 'react'
import Pagination from '../../../Pagination/Pagination'
const Parures_Mix = ({returnArticlesParuresMix, postsPerPage,ArticlesParuresMixLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
                {returnArticlesParuresMix}
            </div>  
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesParuresMixLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Parures_Mix
