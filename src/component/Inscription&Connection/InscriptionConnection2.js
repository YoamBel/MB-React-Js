import React, {useState,useEffect,useRef} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory ,Link} from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import emailjs from "emailjs-com"
import './styles/InscriptionConnection.css'
import 'react-phone-input-2/lib/style.css';


const InscriptionConnection2 = ({crypto ,date,regex}) => {

    const form = useRef();
    const formActif = useRef();
    const history = useHistory();
    const { register , handleSubmit , formState:{errors}, clearErrors} = useForm(); 
    

    //Login 
    const [stateLogin ,setStateLogin] = useState({
        Login_Email: "",
        Login_Password:""
    });
    const {Login_Email,Login_Password} = stateLogin
    const [ErrorsLogin,setErrorsLogin] = useState(false);
    const [SendNewValidation,setSendNewValidation] = useState('')
    const [NotValidMail, setNotValidMail] = useState(false)


    //register
    const [IfExist,setIfExist] = useState(false);
    const [ConfirmEmail,setConfirmEmail] = useState('');
    const [ConfirmPassword,setConfirmPassword] = useState('');
    const [MobileTel,setMobileTel] = useState('');         
    const [PaysSelect, setPaysSelect] = useState('');
    const [FixeTel, setFixeTel] = useState('');
    const [stateRegister , setStateRegister] = useState({
        Id: 0,
        Register_Email: "",
        Register_Password:"",
        Actif:0,
        Prenium : 0,
        Civilite:"",
        Nom:"",
        Prenom:"",
        RaisonSocial:"",
        NumeroSiret:"",
        TVA:"",
        AdresseSociete1:"",
        AdresseSociete2:"",
        CodePostal:"",
        Ville:"",
        RefClientMB:"",
        CptClientContaMB:"",
        CpteurDevis: 0,
		CleSecu:crypto,
        DateCreate:date,
        DateMAJ:date

    })

    const { Id,Register_Email,Register_Password,Actif,
        Prenium,Civilite,Nom,Prenom,
        RaisonSocial,NumeroSiret,
        TVA,AdresseSociete1,AdresseSociete2,
        CodePostal,Ville,RefClientMB,CptClientContaMB,
        CleSecu,CpteurDevis,DateCreate,DateMAJ
    } = stateRegister;



    useEffect(() => {

		const FetchCptRegister = () => {
			fetch(`http://proj6.ruppin-tech.co.il/api/ComptesClients`,{
            method:'GET',
            headers:{
                Accept:'application/json','Content-Type':'application/json',
            },
            })
            .then((response)=>response.json())
            .then((json) => {
			
				if(json.length === 0)
				{
					let valid = true
					console.log("j'existe pas 0")
					setIfExist(valid)
					console.log(IfExist)
				}
				else{
					// eslint-disable-next-line array-callback-return
					json.map(item => {
						if(item.Cptcli_Email_Id === Register_Email)
						{ 
						  console.log("j'existe")
						  let valid = false;
						  setIfExist(valid)
						}
						else{
						  let valid = true
						  console.log("j'existe pas")
						  setIfExist(valid)
						}
					})		
				}		 	  
            })
            .catch((error) => {console.log(error)})    
		}

        const FetchCptLogin = () => {
			fetch(`http://proj6.ruppin-tech.co.il/api/ComptesClients`,{
            method:'GET',
            headers:{
                Accept:'application/json','Content-Type':'application/json',
            },
            })
            .then((response)=>response.json())
            .then((json) => {
                // eslint-disable-next-line array-callback-return
                json.map(item => {
                    console.log("je verifi le mail Pour savoire si je doit envoyer le nouveau code crypto")
                    if(Login_Email === item.Cptcli_Email_Id && Login_Password === item.Cptcli_Password)
                    {
                        if(item.Cptcli_Actif === 1)
                        {
                            console.log("j entre dans le compte")
                            setNotValidMail(false)
                        }
                        else if (item.Cptcli_Actif === 0){
                            console.log("je recoi un nouveau msg de comfirmation donc je renvoi true")
                            let val = item.Cptcli_Cle_secu;
                            setSendNewValidation(val);
                            setNotValidMail(true)
                        }
                        else{
                            console.log("ya un bug ")
                        }
                    }
                    else{
                        console.log("mdp ou mail errone")
                    }
                })
            })
            .catch((error) => {console.log(error)})    
		}

        FetchCptLogin();
		FetchCptRegister();
	},[IfExist, Login_Email, Login_Password, Register_Email])

    //login
    const submitHandlerLogin = async(e) => {
        e.preventDefault();
       
        if(sessionStorage.getItem(e)) 
        {
			console.log("je suis enregistrer dans le session storage")
            setStateLogin(JSON.parse(sessionStorage.getItem(e)))
        }
        else{
			console.log("je suis dans la methode get")
            await fetch('http://proj6.ruppin-tech.co.il/api/ComptesClients',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
            })
            .then((response)=>response.json())
            .then((res) => {
                // eslint-disable-next-line array-callback-return
                res.map((item) => {
					console.log("je verifi le mail")
                    if(Login_Email === item.Cptcli_Email_Id)
                    {
						console.log("je verifi le mdp")
                        if(Login_Password === item.Cptcli_Password)
                        {
							console.log("je verifi cpt actif")
                            if(item.Cptcli_Actif === 1)
                            {                        
							   console.log("je m enregistre dans le session storage")
                               console.log(item)
                                if(!sessionStorage.getItem(item.Cptcli_Num_ID))
                                {
                                    sessionStorage.setItem(item.Cptcli_Num_ID, JSON.stringify(item))
                                }
                                if(!sessionStorage.getItem('datetime')){
                                    sessionStorage.setItem('datetime', Date.now())
                                }
                                history.push("/")
                                window.location.reload();
                            }
                            else{
                                alert("Veuillez confirmer votre mail")
                                console.log("je n est pas confirmer mon mail un mail est envoyer")               
                            }
  
                        }
                        else{
                            console.log("mots de passe invalide")
                            setErrorsLogin(true)
                        }
                        
                    }
                    else{
                        console.log("Veuillez entre un mail valide")
                        setErrorsLogin(true)
                    }
                })
                setStateLogin({Email:"",Password:""})
            }) 
            
            console.log("je suis avant notvalide = " + NotValidMail)
            if(NotValidMail === true)
            {
                emailjs.sendForm('service_oxm9xg8', 'template_lr91ags', formActif.current, 'user_UKAbD68FFrXFaTIa8Eqd9')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

            }
            else{
                console.log("pas besion de validation")
            }
        }      
    }


    

    //register
    const submitHandlerRegister = e => {
		
		if(Register_Email === ConfirmEmail && Register_Password === ConfirmPassword)
		{
			console.log("Mail correct")
			console.log("mdp correct")
			console.log(IfExist === false ? "je ne suis pas dedant" :" je suis dans l'insertion")
			if(IfExist === true)
			   {
				   console.log("je suis enregistrer")
					const DevenirClient = {
					Cptcli_Num_ID:Id,
					Cptcli_Email_Id:Register_Email,
					Cptcli_Password:Register_Password,
					Cptcli_Actif:Actif,
					Cptcli_Acces_Premium:Prenium,
					Cptcli_Civilite:Civilite,
					Cptcli_Nomcli:Nom,
					Cptcli_Prenom:Prenom,
					Cptcli_Tel1:MobileTel,
					Cptcli_RaiSoc:RaisonSocial,
					Cptcli_No_Siret:NumeroSiret,
					Cptcli_No_TVAintra:TVA,
					Cptcli_Adr1:AdresseSociete1,
					Cptcli_Adr2:AdresseSociete2,
					Cptcli_CP:CodePostal,
					Cptcli_ville: Ville,
					Cptcli_Pays:PaysSelect,
					Cptcli_Tel2:FixeTel,
					Cptcli_RefcliMB:RefClientMB,
					Cptcli_ComptacliMB:CptClientContaMB,
					Cptcli_Cpteur_Devis:CpteurDevis,
					Cptcli_Cle_secu:CleSecu,
					Cptcli_DatCre:DateCreate,
					Cptcli_DatMaj:DateMAJ,
					}

					axios.post('http://proj6.ruppin-tech.co.il/api/ComptesClients',DevenirClient)
					.then(response => {
						console.log(response)
					})
					.catch(error => {console.log("Error",error)})

					let valide= false
					setIfExist(valide)
					console.log(IfExist)
		 
					emailjs.sendForm('service_kftc1xg', 'template_753o5c3', form.current, 'user_AYfkXbBsNcOJkIhBcoJB9')
						 .then((result) => {
							 console.log(result.text);
						 }, (error) => {
							 console.log(error.text);
						 });
				 
	 
					setStateRegister({Register_Email: "",ConfirmEmail: "",ConfirmPassword:"",Register_Password:"",Civilite:"",Nom:"",Prenom:"",MobileTel:"",
						RaisonSocial:"",NumeroSiret:"",TVA:"",AdresseSociete1:"",AdresseSociete2:"",CodePostal:"",
						Ville:"",PaysSelect:"",FixeTel:""}
					);
					setConfirmEmail("")
					setConfirmPassword("")

                    alert("Veuillez comfirmez votre adresse mail")
			   }
			//window.location.reload();			
		}
		else{
			console.log("Mail pas correct")
			console.log("mdp pas correct")
		}	
	}





    const handleChangeLogin = (e) => {
        let {name , value} = e.target;
        setStateLogin({...stateLogin,[name]:value});
    }

	const handleChangeRegister = (e) => {
        let {name , value} = e.target;
        setStateRegister({...stateRegister,[name]:value});
    }


    return (
        <div className = "main">
            <div className = "container-main">
                <div className = "main-connect">
                    <h1 className = "tlt-co tlt">Se Connecter</h1>
                    <form ref = {formActif} className="form-ctr"  onSubmit = {submitHandlerLogin}>
                        <div className = "inp inp-co inp-co-mail">
                            <label htmlFor = "">Email <span className ="star">*</span></label>
                            <input 
                                type = "text"
                                className = "inp-tar inp-mail"
                                placeholder = "Entrer votres e-mail..."
                                name = "Login_Email"
                                value = {Login_Email}
                                onChange = {handleChangeLogin}
                            />
                         
                        </div>

                        <div className = "inp inp-co inp-co-psw">
                            <label htmlFor = "">Mots de passe <span className ="star">*</span></label>
                            <input 
                                type = "password"
                                
                                className = "inp-tar inp-psw"
                                placeholder = "Entrer votres mots de passe..."
                                name = "Login_Password"
                                value = {Login_Password}
                                onChange = {handleChangeLogin}
                            />
                            
                        </div>
                        <div>
                            {ErrorsLogin ? <small className="invalide">Votre Mail ou Mots de passe est erroné</small> : null }
                        </div>
                        
                        <button className = "btn btn-sub-co " type = "submit">Connexion</button>

                        <div className = "reset-mdp">
                            <Link className = "link-reset-mdp" to = "/Mots de passe Oublier">Mots de passe Oublier</Link>
                            <input style = {{display : 'none'}} name = "CleSecu" value = {SendNewValidation} />
                        </div>

                    </form>
                </div>





                <div className = "main-register">
                    <h1 className = "tlt-dvc tlt">Devenir Client</h1>
                    <form className="form-ctr" ref = {form} onSubmit = {handleSubmit(submitHandlerRegister)}>

                        {/* Register Mail */}
                        <div className = "inp inp-re inp-re-mail">
                            <label htmlFor = "">Email <span className ="star">*</span></label>
                            <input 
                                type = "text"
                                className = {"inp-tar input-mail"}
                                name = "Register_Email"
                                {...register("Register_Email" , {required : "Veuillez entrer un Mail valide" , 
                                pattern: {
                                    value :  regex,
                                    message : "Veuillez entrer un Mail valide"
                                }})}
                                value = {Register_Email}						
                                onChange = {handleChangeRegister}
                            />
                            
                            {errors.Register_Email && (
                                <small className="invalide">{errors.Register_Email.message}</small>
                            )}
                        </div> 

                        {/* Register confirm Mail */}
                        <div className = "inp inp-re inp-re-conf-mail">
                        <label htmlFor = "">Confirmation du Email <span className ="star">*</span></label>
                        <input 
                            type = "text"
                            name= "ConfirmEmail"
                            className = "inp-tar input-conf-mail"
                            {...register("ConfirmEmail", {required : "Veuillez completez le champs" , 
                            pattern: {
                                value :  regex,
                                message : "Veuillez confirmer votre Mail"
                            }})}
                            value = {ConfirmEmail}
                            onChange = {e => setConfirmEmail(e.target.value)}
                        />

                        {errors.ConfirmEmail && (
                            <small className="invalide">{errors.ConfirmEmail.message}</small>
                        )}
                        {Register_Email === ConfirmEmail ? null : <small className="invalide">Veuillez confirmer votre Mail</small>}
                        </div>                   


                        {/* Register MDP */}
                        <div className = "inp inp-re inp-re-psw">
                            <label htmlFor = "">Mot de passe <span className ="star">*</span></label>
                            <input 
                                type = "password"
                                className = "inp-tar input-psw"
                                name = "Register_Password"
                                {...register("Register_Password" ,{ required: "Votre mots de passe doit contenir 8 charactere",
                                minLength: {
                                value: 8,
                                message: "Votre mots de passe doit contenir 8 charactere",
                                },})}
                                value = {Register_Password}
                                onChange = {handleChangeRegister}
                            />

                            {errors.Register_Password && (
                                <small className="invalide">{errors.Register_Password.message}</small>
                            )}
                            
                        </div>


                        {/* Register confirmation MDP */}
                        <div className = "inp inp-re inp-re-conf-psw">
                        <label htmlFor = "">Confirmation du Mot de passe <span className ="star">*</span></label>
                        <input 
                            type = "password"
                            
                            className = "inp-tar input-conf-psw"
                            name = "ConfirmPassword"
                            {...register("ConfirmPassword" ,{ required: "Veuillez confirmer votre mots de passe",
                            minLength: {
                            value: 8,
                            message: "Veuillez confirmer votre mots de passe",
                            },})}
                            value = {ConfirmPassword} 
                            onChange = {e => setConfirmPassword(e.target.value)}
                            />
                            {errors.ConfirmPassword && (
                                <small className="invalide">{errors.ConfirmPassword.message}</small>
                            )}	
                            {Register_Password === ConfirmPassword ? null : <small className="invalide">Veuillez confirmer votre mots de passe</small>}		
                        </div>


                        {/* Register civilite */}					
                        <div className = "inp inp-re inp-re-civ">
                            <label htmlFor = "">Civilité<span className ="star">*</span></label>
                            <div className= "select-civ">
                                <div className="val-radio">
                                    <label><input type="radio" name ="Civilite" {...register("Civilite", { required: "Veuillez selectionner votre civilité" })} value="M." checked={Civilite === "M."}onChange={handleChangeRegister}/> M.</label>
                                </div>
                                <div className="val-radio">
                                    <label><input type="radio" name ="Civilite" {...register("Civilite", { required: "Veuillez selectionner votre civilité" })} value="Mme." checked={Civilite === "Mme."}onChange={handleChangeRegister}/> Mme.</label>
                                </div>
                                <div className="val-radio">
                                    <label><input type="radio" name ="Civilite" {...register("Civilite", { required: "Veuillez selectionner votre civilité" })} value="Mlle." checked={Civilite === "Mlle."}onChange={handleChangeRegister}/> Mlle.</label>
                                </div>
                            </div>
                        </div>
                        {errors.Civilite && (
                            <small className="invalide">{errors.Civilite.message}</small>
                        )}
                        

                        {/* Register Nom */}	
                        <div className = "ct-auto-line">
                            <div className = "inp inp-re inp-re-nom">
                                <label htmlFor = "">Nom <span className ="star">*</span></label>
                                <input 
                                    type = "text"								
                                    className = "inp-tar input-nom"
                                    name = "Nom"
                                    {...register("Nom", { required: "Veuillez completer le champs" })}
                                    value = {Nom}
                                    onChange = {handleChangeRegister}
                                />
                                {errors.Nom && (
                                    <small className="invalide">{errors.Nom.message}</small>
                                )}
                            </div>


                            {/* Register Prenom */}
                            <div className = "inp inp-re inp-re-prenom">
                                <label htmlFor = "">Prénom <span className ="star">*</span></label>
                                <input 
                                    type = "text"
                                    name = "Prenom"
                                    className = "inp-tar input-pre"
                                    {...register("Prenom", { required: "Veuillez completer le champs" })}
                                    value = {Prenom}
                                    onChange = {handleChangeRegister}
                                />
                                {errors.Prenom && (
                                    <small className="invalide">{errors.Prenom.message}</small>
                                )}
                            </div>
                        </div>


                        {/* Register Mobiletel */}
                        <div className = "inp inp-re inp-re-mob-phone">
                            <label htmlFor = "">Tel mobile <span className ="star">*</span></label>
                            <PhoneInput
                            country={'fr'}
                            dropdownClass
                            onlyCountries  = {['fr','mq','gp','gf','re','mu']}
                            placeholder="Entrer votre numero de telephone"
                            {...register("MobileTel")}
                            value={MobileTel}
                            className = "inp-tar input-mob-phone"
                            name = "MobileTel"
                            onChange= {setMobileTel}
                            />
                        </div>
                    

                        {/* Register raison social */}				
                        <div className = "inp inp-re inp-re-rs">
                            <label htmlFor = "">Raison Sociale <span className ="star">*</span></label>
                            <input 
                                type = "text"
                                value = {RaisonSocial}
                                className = "inp-tar input-rs"
                                {...register("RaisonSocial", { required: "Veuillez completer le champs" })}
                                name = "RaisonSocial"
                                onChange = {handleChangeRegister}
                            />
                            {errors.RaisonSocial && (
                                <small className="invalide">{errors.RaisonSocial.message}</small>
                            )}
                        </div>

                        
                        {/* Register adresse */}		
                        <div className = "inp inp-re inp-re-adr1">
                            <label htmlFor = "">Adresse <span className ="star">*</span></label>
                            <input 
                                type = "text"
                                value = {AdresseSociete1}
                                className = "inp-tar input-adr1"
                                {...register("AdresseSociete1", { required: "Veuillez completer le champs" })}
                                name = "AdresseSociete1"
                                onChange = {handleChangeRegister}
                            />
                            {errors.AdresseSociete1 && (
                                <small className="invalide">{errors.AdresseSociete1.message}</small>
                            )}
                        </div>


                        {/* Register adresse2 */}	
                        <div className = "inp inp-re inp-re-adr2">
                            <label htmlFor = "">Complément adresse</label>
                            <input 
                                type = "text"
                                value = {AdresseSociete2}
                                className = "inp-tar input-adr2"
                                {...register("AdresseSociete2")}
                                name = "AdresseSociete2"
                                onChange = {handleChangeRegister}
                            />
                        </div>


                        {/* Register code postal */}	
                        <div className = "inp inp-re inp-re-cp">
                            <label htmlFor = "">Code Postal <span className ="star">*</span></label>
                            <input 
                                type = "number"
                                value = {CodePostal}
                                className = "inp-tar input-cp"
                                {...register("CodePostal" , {required : "Veuillez completer le champs",
                                minLength: {
                                    value: 5,
                                    message: "Entrer un code postal valide",
                                },
                                maxLength: {
                                    value: 6,
                                    message: "Entrer un code postal valide",
                                },
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: "Only numbers are allowed",
                                }})}
                                name = "CodePostal"
                                onChange = {handleChangeRegister}
                            />
                            {errors.CodePostal && (
                                <small className="invalide">{errors.CodePostal.message}</small>
                            )}


                        {/* Register ville */}	
                        </div>
                            <div className = "inp inp-re inp-re-vil">
                                <label htmlFor = "">Ville <span className ="star">*</span></label>
                                <input 
                                    type = "text"
                                    value = {Ville}
                                    className = "inp-tar input-vil"
                                    {...register("Ville", { required: "Veuillez completer le champs" })}
                                    name = "Ville"
                                    onChange = {handleChangeRegister}   
                                />
                                {errors.Ville && (
                                    <small className="invalide">{errors.Ville.message}</small>
                                )}
                        </div>


                        {/* Register pays */}	
                        <div className = "inp inp-re inp-re-pays">           
                                <label htmlFor = "">Pays <span className ="star">*</span></label>
                                <select className = "inp-tar input-pays" name = "PaysSelect" {...register("PaysSelect", {required : "Veuillez selectionnez votre pays"})} value = {PaysSelect} onChange = {e => {
                                const selectedCountry = e.target.value;
                                setPaysSelect(selectedCountry)
                            }}>
                                    <option className = "opt-slt-pays" value = "France">France</option>
                                    <option className = "opt-slt-pays" value = "Guyane">Guyane</option>
                                    <option className = "opt-slt-pays" value = "Guadeloupe">Guadeloupe</option>
                                    <option className = "opt-slt-pays" value = "Martinique">Martinique</option>
                                    <option className = "opt-slt-pays" value = "Mauritius">Mauritius</option>
                                    <option className = "opt-slt-pays" value = "Réunion">Réunion</option>
                                </select>
                                {errors.PaysSelect && (
                                    <small className="invalide">{errors.PaysSelect.message}</small>
                                )}
                        </div>


                        {/* Register fix */}		 
                        <div className = "inp inp-re inp-re-fix-phone">
                        <label htmlFor = "">Tel Fixe </label>
                            <PhoneInput
                            country={'fr'}
                            dropdownClass
                            onlyCountries  = {['fr','mq','gp','gf','re','mu']}
                            placeholder="Entrer votre numero de telephone"
                            value={FixeTel}
                            {...register("FixeTel")}
                            name = "FixeTel"
                            onChange= {setFixeTel}
                            />
                        </div>


                        {/* Register numero siret */}	
                        <div className = "inp inp-re inp-re-sir">
                            <label htmlFor = "">Numéro Siret</label>
                            <input 
                                type = "number"
                                value = {NumeroSiret}
                                className = "inp-tar input-ns"
                                name = "NumeroSiret"
                                {...register("NumeroSiret")}
                                onChange = {handleChangeRegister}
                            />
                        </div>


                        {/* Register tva */}	
                        <div className = "inp inp-re inp-re-tva">
                            <label htmlFor = ""> Numéro TVA intra Communautaire</label>
                            <input 
                                type = "text"                          
                                value = {TVA}
                                className = "inp-tar input-tva"
                                name = "TVA"
                                {...register("TVA")}
                                onChange = {handleChangeRegister}
                            />
                        </div>

                        {/* Register btn submit  */}		
                        <div className = "">
                            <input style = {{display : 'none'}} name = "CleSecu" value = {CleSecu} />
                            <button className = "btn btn-sub-re " type = "submit" onClick = {() => clearErrors}>Valider</button>
                        </div>

                    </form>
                </div>
            </div>
	    </div>
    )
}

export default InscriptionConnection2
