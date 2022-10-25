import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Autres_Chaînes_Enfant = ({returnArticlesCollierChainesAutresChainesEnfant , postsPerPage,ArticlesCollierChainesAutresChainesEnfantLenght,paginate}) => {
    return (
        <div>
             <div className = "container-item">
               {returnArticlesCollierChainesAutresChainesEnfant}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesCollierChainesAutresChainesEnfantLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Autres_Chaînes_Enfant
