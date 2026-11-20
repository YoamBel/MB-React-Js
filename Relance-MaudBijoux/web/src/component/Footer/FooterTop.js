import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineInformationCircle } from 'react-icons/hi'; 
import { MdPlace } from 'react-icons/md'; 
import { FaPhoneVolume } from 'react-icons/fa'; 
import { BsEnvelopeFill } from 'react-icons/bs'; 
import './styles/Footer.css'

const FooterTop = () => {

    return (
        <div className = "ct-footer-top">
            <div className = "center box">
                <h2>Adresse</h2>
                <div className = "content">
                    
                    <div className = "place inf">
                        <span className = "span-ic"><MdPlace className = "ic"/></span>
                        <span className = "text">157 Rue du Temple, 75003 Paris, France</span>
                    </div>
                    <div className = "phone inf">
                        <span className = "span-ic"><FaPhoneVolume className = "ic"/></span>
                        <span className = "text">+33 (0)1 48 04 07 50</span>
                    </div>
                    <div className = "email inf">
                        <span className = "span-ic"><BsEnvelopeFill className = "ic"/></span>
                        <span className = "text">MaudBijoux@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className = "left box">
                <h2>Informations</h2>
                <div className = "content">
                    <div className = "inf-left">
                        <p className = "txt">
                            <span className = "span-ic "><HiOutlineInformationCircle className = "ic"/></span>
                            Ouvert du Lundi au Vendredi de 9h30 à 17h
                        </p>
                        <Link to = "/About" className = "link-lft">Qui sommes-nous ?</Link>
                        <Link to = "/ContactUs" className = "link-lft">Contactez-nous</Link>
                        <Link to = "/ConditionGeneral" className = "link-lft">CGV</Link>
                        <Link to = "/PolitiqueDeComfidentialite" className = "link-lft">Politique de confidentialité</Link>
                        <Link to = "/MentionLegal" className = "link-lft">Mentions Légales</Link>
                    </div>
                       
                </div>
                   
            </div>
            <div className = "right box">
                <h2>Nos Collections</h2>
                <div className = "content">
                    <div className = "inf-right">
                        <Link to = "/Collection Diamants" className = "link-rgt">Collection Diamants</Link>
                        <Link to = "/Collection Or 18 Carats 750 millièmes" className = "link-rgt">Collection Or 18 Carats 750 millièmes</Link>
                        <Link to = "/Collection Or 9 Carats 375 millièmes" className = "link-rgt">Collection Or 9 Carats 375 millièmes</Link>                  
                        <Link to = "/Collection Argent 925 millièmes" className = "link-rgt">Collection Argent 925 millièmes</Link>
                        <Link to = "/Collection Acier" className = "link-rgt">Collection Acier</Link>
                    </div>
                   
                </div>
            </div>
              
        </div>
    )
}

export default FooterTop


/*
<div className = "foo-top">
                <div className = "foo-top-right">
                    <h1 className ="tlt-foo-top">Text titre</h1>
                    <p className = "txt-foo-top">Inscrivez-vous pour recevoir des nouvelles d’Agatha et soyez le(a) premièr(e) informé(e) des nouveautés, des promotions, des évènements et bien plus encore.</p>
                </div>
                <div className = "foo-top-left">               
                    <Link to = "" className = "from-left btn-home "><span className = "txt-btn">valide &#10095;&#10095;</span></Link>
                </div>   
            </div>   
            
            













*/