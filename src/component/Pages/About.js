import React from 'react'
import Slideimg1 from '../image/Slideimg1.jpg'
import Slideimg2 from '../image/Slideimg2.jpg'
import Slideimg3 from '../image/Slideimg3.jpg'

const About = () => {
    return (
        <div className = "about-container">
           <div className = "about-ct">
                <div className = "ab-tlt">
                    <h2>Bienvenue sur Maud Bijoux Paris</h2>
                    <h3>157 rue du Temple dans le 3eme arrondissement de Paris.</h3>
                </div>
                <div className = "ab-txt">
                    <p><span>.</span> Fort de son Savoir-faire et de ses de 40 ans d’expériences dans le domaine de la Bijouterie, la Société Maud Bijoux s’adresse exclusivement aux professionnels de la Bijouterie et offre une gamme complète de bijoux en Or 18 Carats 750/000 et en Diamant. </p>
                    <p><span>.</span> Au fil du temps, l’entreprise s’est diversifiée et propose aujourd’hui d’autres produits en Or 9 carats 375/000, Argent 925/000 et Acier. Mais l’Or 18 Carats 750/000 et le Diamant restent son domaine d’activité principal. </p>
                    <p><span>.</span> Maud Bijoux fait partie des leaders en tant que grossiste dans le domaine de la Bijouterie.</p>
                    <p><span>.</span> Son Objectif est de vous permettre de faire votre réassort pour vos boutiques en quelques clics au meilleur prix et vous permettre de découvrir nos produits phares sans vous déplacer.</p>
                    <p><span>.</span> Nos clients restent au top de nos priorités et nous travaillons dur pour développer avec eux une relation sur le long terme, basée sur la confiance et l’authenticité.</p>
                </div>
                <div className = "ab-img">
                    <div><img src = {Slideimg1} alt = ""/></div>
                    <div><img src = {Slideimg2} alt = ""/></div>
                    <div><img src = {Slideimg3} alt = ""/></div>
                </div>
           </div>
        </div>
    )
}

export default About
/*

*/