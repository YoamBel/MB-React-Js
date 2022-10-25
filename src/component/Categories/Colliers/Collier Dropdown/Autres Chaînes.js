import React from 'react';
import Pagination from '../../../Pagination/Pagination';
const Autres_Chaînes = ({returnArticlesCollierChainesAutresChaines, postsPerPage,ArticlesCollierChainesAutresChainesLenght,paginate}) => {
    return (
        <div className = "oth-chn">  
              <div className = "container-item">
               {returnArticlesCollierChainesAutresChaines}
            </div>   
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesCollierChainesAutresChainesLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Autres_Chaînes;