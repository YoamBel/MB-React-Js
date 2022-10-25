import React from 'react'
const CardDetail = ({ItemDetailCard,DetailCard,AddShop}) => {
  

   

    return (
        <div className = "container-card-dt">
                <div className = "bx-card-dt">
                    <div className = "bx-card-dt-img">
                        <img src = {`http://proj6.ruppin-tech.co.il/images/${ItemDetailCard.Art_Fic_Img1}`} className = "card-dt-image" alt = "" />
                    </div>
                    <div className = "bx-card-dt-info">
                        
                        <div className = "bx-card-desc">
                            <p >{ItemDetailCard.Art_Description}</p>
                        </div>
                        <div className = "bx-card-ref">
                            <p >Ref. : {ItemDetailCard.Art_Ref}</p>
                        </div>                      
                        <div className = "bx-card-pds">
                                {ItemDetailCard.Type_Art_Id === 1 ? <p>Article au poids (poids Théorique : {ItemDetailCard.Art_Poids}g)</p>:<p>Article à la pièce</p>}
                        </div>
                        <div className = "bx-card-btn-add"> 
                            <button className ="" type = "submit" onClick = {()=> {AddShop(ItemDetailCard)}}>Ajouter au panier</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default CardDetail
