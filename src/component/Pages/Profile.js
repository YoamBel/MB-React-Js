import React ,{useState} from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form';


const Profile = ({Client, date}) => {

    const { register , handleSubmit , formState:{errors}, clearErrors} = useForm(); 


    const [AncienPassword , setAncienPassword] = useState();
    const [NewPassword , setNewPassword] = useState();
    const [ComfirmNewPassword , setComfirmNewPassword] = useState();
    const [ErrorAncienPassword,setErrorAncienPassword] = useState(false);

    const UpdatePassword = () => {
        console.log("je suis dans le profile cote changement de mots de passe")
        if(AncienPassword === Client.Cptcli_Password)
        {
            if(NewPassword === ComfirmNewPassword)
            {
                console.log("je peu update le mdp")
                const UpdatePassword = {
                    Cptcli_Num_ID:Client.Cptcli_Num_ID,
                    Cptcli_Email_Id:Client.Cptcli_Email_Id,
                    Cptcli_Password:NewPassword,
                    Cptcli_Actif:Client.Cptcli_Actif,
                    Cptcli_Acces_Premium:Client.Cptcli_Acces_Premium,
                    Cptcli_Civilite:Client.Cptcli_Civilite,
                    Cptcli_Nomcli:Client.Cptcli_Nomcli,
                    Cptcli_Prenom:Client.Cptcli_Prenom,
                    Cptcli_Tel1:Client.Cptcli_Tel1,
                    Cptcli_RaiSoc:Client.Cptcli_RaiSoc,
                    Cptcli_No_Siret:Client.Cptcli_No_Siret,
                    Cptcli_No_TVAintra:Client.Cptcli_No_TVAintra,
                    Cptcli_Adr1:Client.Cptcli_Adr1,
                    Cptcli_Adr2:Client.Cptcli_Adr2,
                    Cptcli_CP:Client.Cptcli_CP,
                    Cptcli_ville:Client.Cptcli_ville,
                    Cptcli_Pays:Client.Cptcli_Pays,
                    Cptcli_Tel2:Client.Cptcli_Tel2,
                    Cptcli_RefcliMB:Client.Cptcli_RefcliMB,
                    Cptcli_ComptacliMB:Client.Cptcli_ComptacliMB,
                    Cptcli_Cpteur_Devis:Client.Cptcli_Cpteur_Devis,
                    Cptcli_Cle_secu:Client.Cptcli_Cle_secu,
                    Cptcli_DatCre:Client.Cptcli_DatCre,
                    Cptcli_DatMaj:date,
                }
                sessionStorage.removeItem(Client.Cptcli_Num_ID)
                axios.put(`http://proj6.ruppin-tech.co.il/api/ComptesClients/${UpdatePassword.Cptcli_Num_ID}`,UpdatePassword)
                .then(response => {
                    console.log(response)
                    if(!sessionStorage.getItem(UpdatePassword.Cptcli_Num_ID))
                    {
                        sessionStorage.setItem(UpdatePassword.Cptcli_Num_ID,JSON.stringify(UpdatePassword))
                    }
                })
                setErrorAncienPassword(false)

                alert("Votre mdp a etait changer avec succes")
                window.location.reload();
            
            }
            else{
                console.log("je peu pas update le mdp")
                setErrorAncienPassword(true)
            }
           
        }
        else{
            console.log("error dans l ' anciant password")
            setErrorAncienPassword(true)
        }
    }

    return (
        <div className = "container-profile">
            <form className = "form-profile-reset-mdp" onSubmit = {handleSubmit(UpdatePassword)}>

                <div className = "ct-inp-profile-reset-mdp">
                    <label htmlFor = "">Ancien Mot de passe <span className ="star">*</span></label>
                    <input 
                    type = "password"
                    className = "inp-pro"
                    name = "AncienPassword"
                    value = {AncienPassword}
                    onChange = {e => setAncienPassword(e.target.value)}/>     
                </div>

                <div className = "ct-inp-profile-reset-mdp">
                    <label htmlFor = "">Mot de passe <span className ="star">*</span></label>
                    <input 
                    type = "password"
                    className = "inp-pro"
                    name = "NewPassword"
                    {...register("NewPassword" ,{ required: "Votre mots de passe doit contenir 8 charactere",
                    minLength: {
                    value: 8,
                    message: "Votre mots de passe doit contenir 8 chraractere",
                    },})}
                    value = {NewPassword}
                    onChange = {e => setNewPassword(e.target.value)}/>          
                    {errors.NewPassword && (
                        <small className="invalide">{errors.NewPassword.message}</small>
                    )}           
                </div>


                <div className = "ct-inp-profile-reset-mdp">
                    <label htmlFor = "">Confirmation du Mot de passe <span className ="star">*</span></label>
                    <input 
                    type = "password" 
                    className = "inp-pro"
                    name = "ComfirmNewPassword"
                        {...register("ComfirmNewPassword" ,{ required: "Veuillez confirmer votre mots de passe",
                    minLength: {
                    value: 8,
                    message: "Veuillez confirmer votre mots de passe",
                    },})}
                    value = {ComfirmNewPassword} 
                    onChange = {e => setComfirmNewPassword(e.target.value)}
                    />
                    {errors.ComfirmNewPassword && (
                        <small className="invalide">{errors.ComfirmNewPassword.message}</small>
                    )}
                </div>

                <div>
                    {ErrorAncienPassword ? <small className="invalide">Veuillez saisir votre ancien mots de passe</small> : null }
                </div>
                <div className = "ct-btn-profile-reset-mdp">
                <button className = "btn-profile " type = "submit" onClick = {() => clearErrors}>Changer le mots de passe</button>
                </div>
                
            </form>
        </div>
    )
}

export default Profile
