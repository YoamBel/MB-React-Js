import React , {useState} from 'react';
import ItemCommand from './Command compo/ItemCommand';
const Command = ({Key , RemoveItem , Client , form , SendCommande}) => {
   
    //const [test ,setTest] = useState()
    //const [test2 ,setTest2] = useState([])
   
    //console.log("Commande test   " + test)

    //console.log("Commande test 2   " + test2)

    const [TestQtyArr , setTestQtyArr] = useState([])

    const AddQty = (val) => {
        let arr = []
        arr.push(val)
        setTestQtyArr(arr)
    }
   //console.log(TestQtyArr);
    

    const teste = Client.Cptcli_Prenom  + " " + Client.Cptcli_Nomcli + " " + Client.Cptcli_Num_ID + " "  + Key.map(item => item.Art_Libelle + " , " + item.Art_Ref + "  /// ")
//,test
    return (
      <div className = "panier">
          
        <form ref = {form} onSubmit = {(e)=>SendCommande(e)}> 
            <div className = "commande-container">
                <p name = "subject">{Client.Cptcli_Prenom  + " " + Client.Cptcli_Nomcli}</p>
                <div className = "ct-co-dt-art">      
                    {Key.map((item,index) => 
                        <div key={index}  className = "ct-key">
                            {TestQtyArr}
                            <ItemCommand item = {item} 
                            index = {index} 
                            RemoveItem = {RemoveItem} 
                            setTestQtyArr = {setTestQtyArr}
                            TestQtyArr = {TestQtyArr}
                            AddQty = {AddQty}
                            />
                        </div>
                        

                    )}
                </div>
               
                <div className = "emailjs-text-command"><textarea cols = "100" rows = "20" value = {teste} name = "message" ></textarea></div>
                <div className = "btn-dm-devis"><input type ="submit" name = "subject" value = "Confirmez la Demande de Devis"/></div>       
            </div>
        </form>
      </div>
    )
}

export default Command
