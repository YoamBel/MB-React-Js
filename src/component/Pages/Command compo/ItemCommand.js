import React , {useState,useEffect} from 'react';
import ItemNumericInput from './ItemNumericInput';

const ItemCommand = ({item , index , RemoveItem ,setTestQtyArr,TestQtyArr,AddQty}) => {

    
    const [TestQtyVal , setTestQtyAVal] = useState()
    

    return (
        <>
            <div className = "ct-co-img">
                                <img src = {`http://proj6.ruppin-tech.co.il/images/${item.Art_Fic_Img1}`} className = "" alt = "" />
                            </div>
                            <div className = "ct-co-info">
                                <div>
                                    <div className = "ct-co-info-top">
                                        <div className = "ct-co-desc">
                                            <p >{item.Art_Description}</p>
                                        </div>
                                        <div className = "ct-co-ref">
                                            <p >Ref. : {item.Art_Ref}</p>
                                        </div> 
                                    </div>                      
                                    <div className = "ct-co-pds">
                                        {item.Type_Art_Id === 1 ? <p>Article au poids (poids Théorique : {item.Art_Poids}g)</p>:<p>Article à la pièce</p>}
                                    </div>
                                    <div className = "ct-co-qty">
                                        <ItemNumericInput setTestQtyAVal = {setTestQtyAVal}
                                        index = {index}
                                        AddQty={AddQty}/>       
                                    </div>
                                </div>
                                <div>
                                    <div className = "ct-co-btn-supp">
                                        <button  onClick = {()=> {RemoveItem(localStorage.key(index))}}>Supprimer l'article</button>
                                    </div>
                                </div>          
                            </div>
                             <div className = "ct-co-msg">
                                <p>Demande specifique pour l'article :</p>
                                <textarea cols = "35" rows = "8" name = "message"/>
                            </div>
        </>
    )
}

export default ItemCommand
