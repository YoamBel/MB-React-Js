import React  from 'react';
import { Link } from 'react-router-dom';
import Carte from '../image/carte.PNG'
import './styles/Page.css';

const ContactUs = ({SendEmail}) => {

    

    return (
        <div className = "contact-container">
           <div className = "ct-contact">
                <h2>Contactez-nous</h2>
               <div className = "ct-contact-left ct-r-l">
                    <form onSubmit = {SendEmail}>
                        <div className = "nom">
                            <div className = "text">Nom <span>*</span></div>
                            <input type ="text" name = "nom" required/>
                        </div>
                        <div className = "prenom">
                            <div className = "text">Prénom <span>*</span></div>
                            <input type ="text" name = "prenom" required/>
                        </div>
                        <div className = "phone">
                            <div className = "text">Téléphone <span>*</span></div>
                            <input type ="number" name = "phone" required/>
                        </div>
                        <div className = "email">
                            <div className = "text">Email <span>*</span></div>
                            <input type ="email" name = "email" required/>
                        </div>
                        <div className = "message">
                            <div className = "text">Message <span>*</span></div>
                            <textarea cols = "40" rows = "10" name = "message" required />
                        </div>
                        <div className = "btn-contact">
                            <input type ="submit" name = "subject" value = "Soumettre"/>
                        </div>
                    </form>
               </div>
               
            </div>
            <div className = "ct-contact">
                <h2 className = "tlt-h2">Nos Coordonnées</h2>
                <div className = "ct-contact-left ct-r-l">
                    <div className = "coordonnee">
                            <li>
                                <p className = "coo-mb">Maud Bijoux</p>
                            </li>
                            <li>                
                                <p>157 Rue du Temple,</p>
                                <p>75003 Paris,</p>
                                <p>France</p>
                            </li>
                            <li>
                                <p>Téléphone : +33 (0)1 48 04 07 50</p>
                            </li>
                           
                            <li>
                                <p>E-Mail : MaudBijoux@gmail.com</p>
                            </li>
                            <li>
                                <img src = {Carte} alt = ""/>
                            </li>
                    </div>
                       
                </div>
               
            </div>
            
        </div>
    )
}

export default ContactUs


/*

 <div className = "right box">
                <h2>Contactez-nous</h2>
                <div className = "content">
                            
                            <form onSubmit = {""}>
                                <div className = "nom">
                                    <div className = "text">Nom*</div>
                                    <input type ="text" name = "nameFamille"/>
                                    <div className = "text">Prenom*</div>
                                    <input type ="text" name = "name"/>
                                </div>
                                <div className = "email">
                                <div className = "text">Email*</div>
                                    <input type ="email" required name = "email"/>
                                </div>
                                <div className = "msg">
                                    <div className = "text">Message*</div>
                                    <textarea cols = "30" rows = "8" name = "message" ></textarea>
                                </div>
                                <div className = "btn-footer">
                                    <button type ="submit" name = "subject">Envoyer</button>
                                </div>
                            </form>
                    </div>
            </div>



.right form .text {
    font-size: 1.0625rem;
    margin-bottom: 2px;
    color:#656565;
}
.right form .msg {
    margin-top : 10px 0;   
}
.right form input,
.right form textarea {
    width: 100%;
    font-size: 1.0625rem;
    background: #151515;
    padding-left:10px;
    border : 1px solid #222222
}
.right form input:focus,
.right form textarea:focus {
    outline-color: #3498db;
}

.right form input {
    height: 35px;
}

.right form .btn-footer button{
    height: 40px;
    width: 100%;
    border: none;
    outline: none;
    background: #3498db;
    font-size: 1.0625rem;
    font-weight: 500;
    cursor: pointer;
    transition: .3s;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.right form .btn-footer button:hover {
    background: #000;
    color: white;
}

*/