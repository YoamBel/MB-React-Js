import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Colliers_Femme = ({returnArticlesCollierChainesColliersFemme, postsPerPage,ArticlesCollierChainesColliersFemmeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
               {returnArticlesCollierChainesColliersFemme}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesCollierChainesColliersFemmeLenght} paginate = {paginate}/>   
            </div> 
        </div>
    )
}

export default Colliers_Femme
