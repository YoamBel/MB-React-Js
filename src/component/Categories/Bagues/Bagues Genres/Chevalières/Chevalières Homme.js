import React from 'react'
import Pagination from '../../../../Pagination/Pagination'

const Chevalières_Homme = ({returnArticlesBaguesChevalieresHomme ,postsPerPage,ArticlesBaguesChevalieresHommeLenght,paginate}) => {
    return (
        <div>
            <div className = "container-item">
               {returnArticlesBaguesChevalieresHomme}
            </div>
            <div className = "container-pagination">
                <Pagination postsPerPage = {postsPerPage} totalArt = {ArticlesBaguesChevalieresHommeLenght} paginate = {paginate}/>   
            </div> 
        </div>
    )
}

export default Chevalières_Homme
