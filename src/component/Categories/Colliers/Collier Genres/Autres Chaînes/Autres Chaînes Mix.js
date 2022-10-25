import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Autres_Chaînes_Mix = ({returnArticlesCollierChainesAutresChainesMix, postsPerPage,ArticlesCollierChainesAutresChainesMixLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
               {returnArticlesCollierChainesAutresChainesMix}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesCollierChainesAutresChainesMixLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Autres_Chaînes_Mix
