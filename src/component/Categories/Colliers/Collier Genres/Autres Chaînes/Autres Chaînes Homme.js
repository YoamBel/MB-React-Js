import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Autres_Chaînes_Homme = ({returnArticlesCollierChainesAutresChainesHomme, postsPerPage,ArticlesCollierChainesAutresChainesHommeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
               {returnArticlesCollierChainesAutresChainesHomme}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesCollierChainesAutresChainesHommeLenght} paginate = {paginate}/>   
            </div> 
        </div>
    )
}

export default Autres_Chaînes_Homme
