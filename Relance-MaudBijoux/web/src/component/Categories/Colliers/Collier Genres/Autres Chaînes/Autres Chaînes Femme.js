import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Autres_Chaînes_Femme = ({returnArticlesCollierChainesAutresChainesFemme, postsPerPage,ArticlesCollierChainesAutresChainesFemmeLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
               {returnArticlesCollierChainesAutresChainesFemme}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesCollierChainesAutresChainesFemmeLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Autres_Chaînes_Femme
