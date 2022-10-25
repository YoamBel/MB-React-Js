import React from 'react';
import Pagination from '../../../Pagination/Pagination';
const Chaînes_Fines = ({returnArticlesCollierChainesChainesFines, postsPerPage,ArticlesCollierChainesChainesFinesLenght,paginate}) => {
    return (
        <div className = "chn-fin">  
              <div className = "container-item">
               {returnArticlesCollierChainesChainesFines}
            </div>  
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesCollierChainesChainesFinesLenght} paginate = {paginate}/>   
            </div> 
        </div>
    )
}

export default Chaînes_Fines;