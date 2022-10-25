import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Colliers_Enfant = ({returnArticlesCollierChainesColliersEnfant, postsPerPage,ArticlesCollierChainesColliersEnfantLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
               {returnArticlesCollierChainesColliersEnfant}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesCollierChainesColliersEnfantLenght} paginate = {paginate}/>   
            </div>  
        </div>
    )
}

export default Colliers_Enfant
