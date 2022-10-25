import React  from 'react';
import Pagination from '../../Pagination/Pagination';
const Pendentifs = ({returnArticlesPendentifs , postsPerPage,ArticlesPendentifsLenght,paginate}) => {
    

    return (
        <div className = "pendentif">  
             <div className = "container-item">
               {returnArticlesPendentifs}
            </div>  
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesPendentifsLenght} paginate = {paginate}/>   
            </div>
        </div>
    )
}

export default Pendentifs;