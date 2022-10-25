import React from 'react'
import Pagination from '../../../../Pagination/Pagination'
const Chaînes_Fines_Homme = ({returnArticlesCollierChainesChainesFinesHomme, postsPerPage,ArticlesCollierChainesChainesFinesHommeLenght,paginate}) => {
    return (
        <div>
            <div className = "chn-fin">  
              <div className = "container-item">
               {returnArticlesCollierChainesChainesFinesHomme}
            </div> 
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesCollierChainesChainesFinesHommeLenght} paginate = {paginate}/>   
            </div>  
        </div>
        </div>
    )
}

export default Chaînes_Fines_Homme
