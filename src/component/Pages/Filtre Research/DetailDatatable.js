import React from 'react'
import '../styles/Datatable.css'

const DetailDatatable = (props) => {

    return (
        <div className = "container-card-dt2">
                <div className = "bx-card-dt2">
                    <div className = "bx-card-dt-img2">
                        <img src = {`http://proj6.ruppin-tech.co.il/images/${props.ItemDetailCard.Art_Fic_Img1}`} className = "card-dt-image2" alt = "" />
                    </div>
                    <div className = "bx-card-dt-info2">
                        
                        <div className = "bx-card-desc2">
                            <p >{props.ItemDetailCard.Art_Description}</p>
                        </div>
                        <div className = "bx-card-ref2">
                            <p >Ref. : {props.ItemDetailCard.Art_Ref}</p>
                        </div>                      
                        <div className = "bx-card-pds2">
                                {props.ItemDetailCard.Type_Art_Id === 1 ? <p>Article au poids (poids Théorique : {props.ItemDetailCard.Art_Poids}g)</p>:<p>Article à la pièce</p>}
                        </div>
                        <div className = "bx-card-btn-add2"> 
                            <button className ="" type = "submit" onClick = {()=> {props.AddShop(props.ItemDetailCard)}}>Ajouter au panier</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default DetailDatatable;