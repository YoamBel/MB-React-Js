import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Colliers_Homme = ({returnArticlesCollierChainesColliersHomme, postsPerPage,ArticlesCollierChainesColliersHommeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
               {returnArticlesCollierChainesColliersHomme}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesCollierChainesColliersHommeLenght} paginate = {paginate}/>   
            </div>  
        </div>
    )
}

export default Colliers_Homme
