import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Chaînes_Fines_Enfant = ({returnArticlesCollierChainesChainesFinesEnfant, postsPerPage,ArticlesCollierChainesChainesFinesEnfantLenght,paginate}) => {
    return (
        <div>
            <div className = "chn-fin">  
              <div className = "container-item">
               {returnArticlesCollierChainesChainesFinesEnfant}
            </div>  
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesCollierChainesChainesFinesEnfantLenght} paginate = {paginate}/>   
            </div> 
        </div>
        </div>
    )
}

export default Chaînes_Fines_Enfant
