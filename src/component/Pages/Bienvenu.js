import axios from 'axios'
import React , {useState,useEffect} from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router'


const Bienvenu = ({date}) => {

    const {CleSecu} = useParams()
    const history = useHistory()
    const[ CptCli,setCptCli] = useState()

    useEffect(() => {
        const FetchCrypto = () => {
            fetch(`http://proj6.ruppin-tech.co.il/api/ComptesClientsUnique/${CleSecu}`,{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
                })
                .then((response)=>response.json())
                .then((json) => {
                   console.log(json)
                   let arr = []
                   json.map(item => arr.push(item))
                   setCptCli(arr)
                })
                .catch((error) => {console.log(error)})    
        }

        FetchCrypto();
    },[CleSecu])

    console.log(CptCli)


    const handelAxiosPutActive = (e) => {

        e.preventDefault()
        try{         
            const ActiveCpt = {
                Cptcli_Num_ID:CptCli[0].Cptcli_Num_ID,
                Cptcli_Email_Id:CptCli[0].Cptcli_Email_Id,
                Cptcli_Password:CptCli[0].Cptcli_Password,
                Cptcli_Actif:CptCli[0].Cptcli_Actif,
                Cptcli_Acces_Premium:CptCli[0].Cptcli_Acces_Premium,
                Cptcli_Civilite:CptCli[0].Cptcli_Civilite,
                Cptcli_Nomcli:CptCli[0].Cptcli_Nomcli,
                Cptcli_Prenom:CptCli[0].Cptcli_Prenom,
                Cptcli_Tel1:CptCli[0].Cptcli_Tel1,
                Cptcli_RaiSoc:CptCli[0].Cptcli_RaiSoc,
                Cptcli_No_Siret:CptCli[0].Cptcli_No_Siret,
                Cptcli_No_TVAintra:CptCli[0].Cptcli_No_TVAintra,
                Cptcli_Adr1:CptCli[0].Cptcli_Adr1,
                Cptcli_Adr2:CptCli[0].Cptcli_Adr2,
                Cptcli_CP:CptCli[0].Cptcli_CP,
                Cptcli_ville:CptCli[0].Cptcli_ville,
                Cptcli_Pays:CptCli[0].Cptcli_Pays,
                Cptcli_Tel2:CptCli[0].Cptcli_Tel2,
                Cptcli_RefcliMB:CptCli[0].Cptcli_RefcliMB,
                Cptcli_ComptacliMB:CptCli[0].Cptcli_ComptacliMB,
                Cptcli_Cpteur_Devis:CptCli[0].Cptcli_Cpteur_Devis,
                Cptcli_Cle_secu:CptCli[0].Cptcli_Cle_secu,
                Cptcli_DatCre:CptCli[0].Cptcli_DatCre,
                Cptcli_DatMaj:date
            }
            console.log(CptCli)
            axios.put(`http://proj6.ruppin-tech.co.il/api/ComptesClientsValidation/${CleSecu}`,ActiveCpt)
            .then((json) => {
                console.log(json)
            })   
            history.push("/InscriptionConnection2")
        }
        catch (error)
        {
            console.log("une error c est produite")
            history.push("/Erreur de comfirmation")
        }         
    }

    return (
        <div className = "container-bnv">
            <div className = "ct-bnv">
                <h1 className = "tlt-bnv"> Votre compte Client Maud Bijoux est activé</h1>
                <form onSubmit = {handelAxiosPutActive}>
                    <button className = "btn-bnv" type = "submit">Accedez au site</button>
                </form>
            </div>
           <div className = "wave wave1"></div>
           <div className = "wave wave2"></div>
           <div className = "wave wave3"></div>
           <div className = "wave wave4"></div>
        </div>
    )
}

export default Bienvenu
