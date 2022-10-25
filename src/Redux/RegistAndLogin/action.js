import axios from 'axios';
import * as types from './type';


const registerStart = () => ({
    type : types.REGISTER_START
})

const registersSuccess = (user) => ({
    type : types.REGISTER_SUCCESS,
    payload : user
})

const registerFail = (error) => ({
    type : types.REGISTER_FAIL,
    payload : error
})


export const registerInitiate = (Cptcli_Num_ID,Cptcli_Email_Id , Cptcli_Password,Cptcli_Actif,Cptcli_Acces_Premium,Cptcli_Civilite,Cptcli_Nomcli,
    Cptcli_Prenom,Cptcli_Tel1,Cptcli_RaiSoc,Cptcli_No_Siret,Cptcli_No_TVAintra,Cptcli_Adr1,Cptcli_Adr2,Cptcli_CP,Cptcli_ville,Cptcli_Pays,
    Cptcli_Tel2,Cptcli_RefcliMB,Cptcli_ComptacliMB,Cptcli_Cpteur_Devis,Cptcli_DatCre,Cptcli_DatMaj) => {
    return function (dispatch) {
        dispatch(registerStart);

        axios.post('http://proj6.ruppin-tech.co.il/api/ComptesClients',{Cptcli_Num_ID,Cptcli_Email_Id , Cptcli_Password,Cptcli_Actif,Cptcli_Acces_Premium,Cptcli_Civilite,Cptcli_Nomcli,
        Cptcli_Prenom,Cptcli_Tel1,Cptcli_RaiSoc,Cptcli_No_Siret,Cptcli_No_TVAintra,Cptcli_Adr1,Cptcli_Adr2,Cptcli_CP,Cptcli_ville,Cptcli_Pays,
        Cptcli_Tel2,Cptcli_RefcliMB,Cptcli_ComptacliMB,Cptcli_Cpteur_Devis,Cptcli_DatCre,Cptcli_DatMaj})      
        .then(response => {
            console.log(response);
            dispatch(registersSuccess(response));
        })
        .catch(error => {
            console.log( error.response.request._response )
            dispatch(registerFail(error.message));
        })
    }
}
