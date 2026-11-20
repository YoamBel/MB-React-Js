import React , {useState} from 'react'
import NumericInput from 'react-numeric-input';
const ItemNumericInput = ({setTestQtyAVal,index,AddQty}) => {

    const [qty,setQty]=useState(0);

    return (
        <div key = {index}>
            <label> Quantité : 
            <NumericInput mobile min={ 1 }  
            inputmode="numeric" maxLength={ 4 } 
            precision={ 0 } step={ 1 } 
            value={qty} 
            onChange = {setQty}
            onClick = {() => {setTestQtyAVal(qty); AddQty(qty);}}/>                                
            </label>
                                           
        </div>
    )
}

export default ItemNumericInput
