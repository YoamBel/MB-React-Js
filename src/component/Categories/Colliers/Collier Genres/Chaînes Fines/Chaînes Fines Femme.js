import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Chaînes_Fines_Femme = ({returnArticlesCollierChainesChainesFinesFemme, postsPerPage,ArticlesCollierChainesChainesFinesFemmeLenght,paginate}) => {
    return (
        <div>
            <div className = "chn-fin">  
              <div className = "container-item">
               {returnArticlesCollierChainesChainesFinesFemme}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesCollierChainesChainesFinesFemmeLenght} paginate = {paginate}/>   
            </div>   
        </div>
        </div>
    )
}

export default Chaînes_Fines_Femme
