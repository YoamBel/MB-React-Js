import React, {useState,useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { useHistory} from 'react-router-dom';
import { registerInitiate } from '../../Redux/RegistAndLogin/action';
import PhoneInput from 'react-phone-input-2';
import './styles/InscriptionConnection.css'


const InscriptionConnection = () =>{

    const history = useHistory();
    const [stateLogin ,setStateLogin] = useState({
        Login_Email: "",
        Login_Password:""
    });
    

    const {Login_Email,Login_Password} = stateLogin

    // Variable inscriptions
    const showdate = new Date();
    const date = showdate.getFullYear() + `-` + showdate.getMonth() + `-` + showdate.getDate();

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
        DateCreate:date,
        DateMAJ:date

    })


   

    const { Id,Register_Email,Register_Password,Actif,
        Prenium,Civilite,Nom,Prenom,
        RaisonSocial,NumeroSiret,
        TVA,AdresseSociete1,AdresseSociete2,
        CodePostal,Ville,RefClientMB,CptClientContaMB,
        CpteurDevis,DateCreate,DateMAJ
    } = stateRegister;


    //const history = useHistory();
    const currentUser = useSelector(state => state.user)

    

    const dispatch = useDispatch();

    const submitHandlerRegister = e => {
        e.preventDefault();
        dispatch(registerInitiate(Id,Register_Email,Register_Password,Actif,
            Prenium,Civilite,Nom,Prenom,
            MobileTel,RaisonSocial,NumeroSiret,
            TVA,AdresseSociete1,AdresseSociete2,
            CodePostal,Ville,PaysSelect,FixeTel,RefClientMB,
            CptClientContaMB,CpteurDevis,DateCreate,DateMAJ))

            setStateRegister({Register_Email: "",ConfirmEmail: "",ConfirmPassword:"",Register_Password:"",Civilite:"",Nom:"",Prenom:"",MobileTel:"",
            RaisonSocial:"",NumeroSiret:"",TVA:"",AdresseSociete1:"",AdresseSociete2:"",CodePostal:"",
            Ville:"",PaysSelect:"",FixeTel:""}
        );

        
    }

    const submitHandlerLogin = async(e) => {
        e.preventDefault();
       
        if(localStorage.getItem(e)) 
        {
            setStateLogin(JSON.parse(localStorage.getItem(e)))
        }
        else{
            await fetch('http://proj6.ruppin-tech.co.il/api/ComptesClients',{
                method:'GET',
                headers:{
                    Accept:'application/json','Content-Type':'application/json',
                },
            })
            .then((response)=>response.json())
            .then((res) => {
                //let arr =[];
                res.map((item) => {
                    //arr.push(item.Cptcli_Email_Id,item.Cptcli_Password)
                    if(Login_Email === item.Cptcli_Email_Id)
                    {
                        if(Login_Password === item.Cptcli_Password)
                        {
                            console.log("Vous devais confirmer votre mail")
                            if(item.Cptcli_Actif === 1)
                            {
                               // if(item.Cptcli_Acces_Premium === 1)
                                
                                if(!sessionStorage.getItem(item.Cptcli_Num_ID))
                                {
                                    sessionStorage.setItem(item.Cptcli_Num_ID, JSON.stringify(item))
                                }
                                if(!sessionStorage.getItem('datetime')){
                                    sessionStorage.setItem('datetime', Date.now())
                                }
                                history.push("/")
                            }
  
                        }
                        else{
                            console.log("mots de passe invalide")
                        }
                        
                    }
                    else{
                        console.log("Veuillez entre un mail valide")
                    }
                })
                //setConnect(arr)
                setStateLogin({Email:"",Password:""})
            })

            
        }

       
    }

    useEffect(() => {
        if(!currentUser){
            history.push("/")
        }
        if(localStorage.getItem('Clientdate'))
        {
            const date = localStorage.getItem('Clientdate')
            checkDataAge(date)
        }
    },[currentUser,history])

   

    const checkDataAge = (date) => {

        const today = Date.now();
        const timeDiff = today - date;
        const dayDiff = timeDiff / (1000 * 3600 * 24)

        if(dayDiff  >= 1 )
        {
            localStorage.clear();
            localStorage.setItem('Clientdate', Date.now())
        }
    }

    const handleChangeRegister = (e) => {
        let {name , value} = e.target;
        setStateRegister({...stateRegister,[name]:value});
    }

    const handleChangeLogin = (e) => {
        let {name , value} = e.target;
        setStateLogin({...stateLogin,[name]:value});
    }
  

    return (
        <div className = "main">
            <div className = "container-main">
                <div className = "main-connect">
                    <h1 className = "tlt-co tlt">Se Connecter</h1>
                    <form className="form-ctr" onSubmit = {submitHandlerLogin}>
                        <div className = "inp inp-co inp-co-mail">
                            <label htmlFor = "">Email <span className ="star">*</span></label>
                            <input 
                                type = "email"
                                required
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
                                required
                                className = "inp-tar inp-psw"
                                placeholder = "Entrer votres mots de passe..."
                                name = "Login_Password"
                                value = {Login_Password}
                                onChange = {handleChangeLogin}
                            />
                        </div>

                        <button className = "btn btn-sub-co " type = "submit">Connexion</button>

                    </form>
                </div>
                <div className = "main-register">
                    <h1 className = "tlt-dvc tlt">Devenir Client</h1>
                    <form className="form-ctr" onSubmit = {submitHandlerRegister} >
                        <div className = "inp inp-re inp-re-mail">
                            <label htmlFor = "">Email <span className ="star">*</span></label>
                            <input 
                                type = "email"
                                required
                                className = "inp-tar input-mail"
                                name = "Register_Email"
                                value = {Register_Email}
                                onChange = {handleChangeRegister}
                            />
                        </div> 
                        <div className = "inp inp-re inp-re-conf-mail">
                        <label htmlFor = "">Confirmation du Email <span className ="star">*</span></label>
                        <input 
                            type = "ConfirmEmail"
                            required
                            className = "inp-tar input-conf-mail"
                            value = {ConfirmEmail}
                            onChange = {e => setConfirmEmail(e.target.value)}
                        />
                        </div>                   

                        <div className = "inp inp-re inp-re-psw">
                            <label htmlFor = "">Mot de passe <span className ="star">*</span></label>
                            <input 
                                type = "password"
                                required
                                className = "inp-tar input-psw"
                                name = "Register_Password"
                                value = {Register_Password}
                                onChange = {handleChangeRegister}
                            />
                        </div>

                        <div className = "inp inp-re inp-re-conf-psw">
                        <label htmlFor = "">Confirmation du Mot de passe <span className ="star">*</span></label>
                        <input 
                            type = "password"
                            required
                            className = "inp-tar input-conf-psw"
                            name = "ConfirmPassword"
                            value = {ConfirmPassword}           
                            onChange = {e => setConfirmPassword(e.target.value)}
                        />
                        </div>
                        <div className = "inp inp-re inp-re-civ">
                            <label htmlFor = "">Civilité<span className ="star">*</span></label>
                            <div className= "select-civ">
                                <div className="val-radio">
                                    <label><input type="radio" name ="Civilite" value="M." checked={Civilite === "M."}onChange={handleChangeRegister}/> M.</label>
                                </div>
                                <div className="val-radio">
                                    <label><input type="radio" name ="Civilite" value="Mme." checked={Civilite === "Mme."}onChange={handleChangeRegister}/> Mme.</label>
                                </div>
                                <div className="val-radio">
                                    <label><input type="radio" name ="Civilite" value="Mlle." checked={Civilite === "Mlle."}onChange={handleChangeRegister}/> Mlle.</label>
                                </div>
                            </div>
                        </div>
                        
                        <div className = "ct-auto-line">
                            <div className = "inp inp-re inp-re-nom">
                                <label htmlFor = "">Nom <span className ="star">*</span></label>
                                <input 
                                    type = "text"
                                    required
                                    className = "inp-tar input-nom"
                                    name = "Nom"
                                    value = {Nom}
                                    onChange = {handleChangeRegister}
                                />
                            </div>

                            <div className = "inp inp-re inp-re-prenom">
                                <label htmlFor = "">Prénom <span className ="star">*</span></label>
                                <input 
                                    type = "text"
                                    required
                                    name = "Prenom"
                                    className = "inp-tar input-pre"
                                    value = {Prenom}
                                    onChange = {handleChangeRegister}
                                />
                            </div>
                        </div>

                        <div className = "inp inp-re inp-re-mob-phone">
                            <label htmlFor = "">Tel mobile <span className ="star">*</span></label>
                            <PhoneInput
                            country={'fr'}
                            dropdownClass
                            onlyCountries  = {['fr','mq','gp','gf','re','mu']}
                            placeholder="Entrer votre numero de telephone"
                            value={MobileTel}
                            className = "inp-tar input-mob-phone"
                            name = "MobileTel"
                            onChange= {setMobileTel}
                            />
                        </div>
                    
                        <div className = "inp inp-re inp-re-rs">
                            <label htmlFor = "">Raison Sociale <span className ="star">*</span></label>
                            <input 
                                type = "text"
                                required
                                value = {RaisonSocial}
                                className = "inp-tar input-rs"
                                name = "RaisonSocial"
                                onChange = {handleChangeRegister}
                            />
                        </div>

                        

                        <div className = "inp inp-re inp-re-adr1">
                            <label htmlFor = "">Adresse <span className ="star">*</span></label>
                            <input 
                                type = "text"
                                required
                                value = {AdresseSociete1}
                                className = "inp-tar input-adr1"
                                name = "AdresseSociete1"
                                onChange = {handleChangeRegister}
                            />
                        </div>

                        <div className = "inp inp-re inp-re-adr2">
                            <label htmlFor = "">Complément adresse</label>
                            <input 
                                type = "text"
                                value = {AdresseSociete2}
                                className = "inp-tar input-adr2"
                                name = "AdresseSociete2"
                                onChange = {handleChangeRegister}
                            />
                        </div>

                        <div className = "inp inp-re inp-re-cp">
                            <label htmlFor = "">Code Postal <span className ="star">*</span></label>
                            <input 
                                type = "number"
                                value = {CodePostal}
                                className = "inp-tar input-cp"
                                name = "CodePostal"
                                onChange = {handleChangeRegister}
                            />
                        </div>

                            <div className = "inp inp-re inp-re-vil">
                                <label htmlFor = "">Ville <span className ="star">*</span></label>
                                <input 
                                    type = "text"
                                    required
                                    value = {Ville}
                                    className = "inp-tar input-vil"
                                    name = "Ville"
                                    onChange = {handleChangeRegister}   
                                />
                        </div>


                        <div className = "inp inp-re inp-re-pays">           
                                <label htmlFor = "">Pays <span className ="star">*</span></label>
                                <select className = "inp-tar input-pays" name = "PaysSelect" value = {PaysSelect} onChange = {e => {
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
                        </div>
                     
                        <div className = "inp inp-re inp-re-fix-phone">
                        <label htmlFor = "">Tel Fixe </label>
                            <PhoneInput
                            country={'fr'}
                            dropdownClass
                            onlyCountries  = {['fr','mq','gp','gf','re','mu']}
                            placeholder="Entrer votre numero de telephone"
                            value={FixeTel}
                            name = "FixeTel"
                            onChange= {setFixeTel}
                            />
                        </div>

                        <div className = "inp inp-re inp-re-sir">
                            <label htmlFor = "">Numéro Siret</label>
                            <input 
                                type = "number"
                                value = {NumeroSiret}
                                className = "inp-tar input-ns"
                                name = "NumeroSiret"
                                onChange = {handleChangeRegister}
                            />
                        </div>
                        <div className = "inp inp-re inp-re-tva">
                            <label htmlFor = ""> Numéro TVA intra Communautaire</label>
                            <input 
                                type = "text"                          
                                value = {TVA}
                                className = "inp-tar input-tva"
                                name = "TVA"
                                onChange = {handleChangeRegister}
                            />
                        </div>

                    
                        <div className = "">
                            <button className = "btn btn-sub-re " type = "submit">Valider</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default InscriptionConnection


