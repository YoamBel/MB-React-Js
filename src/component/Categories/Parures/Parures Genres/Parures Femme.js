import React from 'react'
import Pagination from '../../../Pagination/Pagination'
const Parures_Femme = ({returnArticlesParuresFemme, postsPerPage,ArticlesParuresFemmeLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
                {returnArticlesParuresFemme}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesParuresFemmeLenght} paginate = {paginate}/>   
            </div>  
        </div>
    )
}

export default Parures_Femme
