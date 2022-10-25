import React, {useState,useEffect,useRef} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory ,Link} from 'react-router-dom';
import emailjs from "emailjs-com"

const Mots_de_passe_Oublier = ({cryptoNewMdp , date}) => {


    const form = useRef();
    const { register , handleSubmit , formState:{errors}, clearErrors} = useForm();
    
    // eslint-disable-next-line no-useless-escape
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const history = useHistory();


    const [ResetPassword , setResetPassword] = useState('')
    const [IfExist,setIfExist] = useState(false);
    const[ CptCli,setCptCli] = useState()

    useEffect(() => {

		const FetchResetPassword = () => {
			fetch(`http://proj6.ruppin-tech.co.il/api/ComptesClients`,{
            method:'GET',
            headers:{
                Accept:'application/json','Content-Type':'application/json',
            },
            })
            .then((response)=>response.json())
            .then((json) => {
                let arr = []
                json.map(item => {
                    if(item.Cptcli_Email_Id === ResetPassword)
                    { 
                      console.log("j'existe")
                      let valid = true;
                      setIfExist(valid)
                      arr.push(item)
                      setCptCli(arr)
                    }
                })				 	  
            })
            .catch((error) => {console.log(error)})    
		}
		FetchResetPassword();
	},[ResetPassword])

    const submitHandlerResetPassword = (e) => {
        console.log("je suis dedant")

        if(IfExist === true)
        {
            console.log("je suis dedant et j 'existe")        
                const ActiveCpt = {
                    Cptcli_Num_ID:CptCli[0].Cptcli_Num_ID,
                    Cptcli_Email_Id:CptCli[0].Cptcli_Email_Id,
                    Cptcli_Password:cryptoNewMdp,
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
                
                if(CptCli[0].Cptcli_Actif === 1)
                {
                    console.log(" le compte est actif ")
                    axios.put(`http://proj6.ruppin-tech.co.il/api/ComptesClientsValidation/${CptCli.Cptcli_Cle_secu}`,ActiveCpt)
                    .then((json) => {
                        console.log(json)
                    })   
                    console.log("Modification fait")

                    emailjs.sendForm('service_81z5fvt', 'template_3vsh1xf',form.current, 'user_UKAbD68FFrXFaTIa8Eqd9')
                    .then((result) => {
                      console.log(result.text);
                        }, (error) => {
                      console.log(error.text);
                  });
                   
                }
                else{
                    console.log("Votre compte est pas activer")
                }

               
               
            
             

        }

    }

    return (
        <div className = "container-reset-mdp">
            <form ref = {form} onSubmit = {handleSubmit(submitHandlerResetPassword)}>
                <h2>MOT DE PASSE OUBLIÉ ?</h2>
                <small className = "sm-reset-mdp">Veuillez renseigner l'adresse e-mail que vous avez utilisée à la création de votre compte. Vous recevrez un code temporaire pour réinitialiser votre mot de passe.</small>
                <div className = "ct-reset-mdp">
                        <label htmlFor = "">Adresse mail <span className ="star">*</span></label>
                        <input 
                            type = "text"
                            className = "inp-reset-mdp"
                            name = "ResetPassword"
                            {...register("ResetPassword" , {required : "Veuillez entrer un Mail valide" , 
                            pattern: {
                                value :  regex,
                                message : "Veuillez entrer un Mail valide"
                            }})}
                            value = {ResetPassword}						
                            onChange = {(e) => setResetPassword(e.target.value) }
                        />
                            
                        {errors.ResetPassword && (
                            <small className="invalide">{errors.ResetPassword.message}</small>
                        )}
                </div> 
                <div className = "ct-btn-reset-mdp">
                        <input style = {{display : 'none'}} name = "cryptoNewMdp" value = {cryptoNewMdp} />
                        <button className = "btn-reset-mdp" type = "submit" onClick = {() => clearErrors}>Envoyer le code de Réinitialisation</button>
                </div>
            </form>
        </div>
    )
}

export default Mots_de_passe_Oublier
