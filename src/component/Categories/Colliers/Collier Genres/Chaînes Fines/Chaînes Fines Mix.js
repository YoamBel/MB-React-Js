import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Chaînes_Fines_Mix = ({returnArticlesCollierChainesChainesFinesMix, postsPerPage,ArticlesCollierChainesChainesFinesMixLenght,paginate}) => {
    return (
        <div>
            <div className = "chn-fin">  
              <div className = "container-item">
               {returnArticlesCollierChainesChainesFinesMix}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesCollierChainesChainesFinesMixLenght} paginate = {paginate}/>   
            </div>   
        </div>
        </div>
    )
}

export default Chaînes_Fines_Mix
