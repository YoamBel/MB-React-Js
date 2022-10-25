import React from "react";
import { Link } from "react-router-dom";

import './styles/NavBars.css'

const NavMid = () => {
    return (
        <div className = "nav-mid ">
            <div className="container-nav-mid">
                <div className ="ct-nav-mid-logo ct ">
                    <div>
                        <p className="logo ">Maud Bijoux</p>
                        <p className="sous-logo">Paris</p>
                    </div>
                    <div>
                            <p className="info-logo">Grossiste & Showroom pour les professionnels de la Bijouterie depuis 1983</p>
                    </div>
                </div>         
            </div>        
        </div>
    )
}

export default NavMid

/*
   <div className ="ct-nav-mid-left ct-btn">
                    <div className = "nav-info"><Link to ="/" className = "nav-acc btn-nav-mid txt-mid">Accueil</Link></div>
                    <div className = "nav-info"> <Link to ="/ContactUs" className = "nav-nouv btn-nav-mid txt-mid">Contact</Link></div>
                    <div className = "nav-info"><Link to ="/About" className = "nav-conta btn-nav-mid txt-mid">À Propos</Link></div>      
                </div>
*/