import React from 'react'
import Pagination from '../../../Pagination/Pagination'
const Parures_Enfant = ({returnArticlesParuresEnfant , postsPerPage,ArticlesParuresEnfantLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
                {returnArticlesParuresEnfant}
            </div>   
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesParuresEnfantLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Parures_Enfant
