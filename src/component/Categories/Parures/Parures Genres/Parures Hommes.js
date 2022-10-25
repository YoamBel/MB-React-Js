import React from 'react'
import Pagination from '../../../Pagination/Pagination'
const Parures_Hommes = ({returnArticlesParuresHomme, postsPerPage,ArticlesParuresHommeLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
                {returnArticlesParuresHomme}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesParuresHommeLenght} paginate = {paginate}/>   
            </div>  
        </div>
    )
}

export default Parures_Hommes
