import React from 'react';
import { Link } from 'react-router-dom';
import { MdCopyright } from 'react-icons/md'; 
import './styles/Footer.css'

const FooterBot = () => {

    return (
        <div className = "ct-footer-bot">
            <div className = "foo-bot">
                
                <span className = "foo-bot-txt"> <MdCopyright className = "foo-bot-ic"/>MAUD BIJOUX - 2021</span>  
                <span className = "sp-foo-bot a-prop"><Link to = "/About" className = "link-txt">À propos de MAUD BIJOUX</Link></span>
                <span className = "sp-foo-bot contact"><Link to = "/ContactUs" className = "link-txt">Contact</Link></span>
            </div>
        </div>
    )
}

export default FooterBot


/*
 <div className = "foo-bot">
                <div className = "foo-bot-right">
                    <h3 className = "tlt-foo-bot-right tlt-foo-bot">info pratique</h3>
                    <div className = "link-foo-bot-right link-foo-bot">
                        <Link to = "/ConditionGeneral" className = "link-foo">Condition générale</Link>
                        <Link to = "/ContactUs" className = "link-foo">Contactez-nous</Link>
                        <Link to = "/About" className = "link-foo">About</Link>
                        <Link to = "" className = "link-foo">lien</Link>
                    </div>
                </div>
                <div className = "foo-bot-left">
                    <h3 className = "tlt-foo-bot-left tlt-foo-bot">Contactez-nous</h3>
                    <div className = "link-foo-bot-left link-foo-bot">
                        <Link to = "" className = "link-foo">lien</Link>
                        <Link to = "" className = "link-foo">lien</Link>
                        <Link to = "" className = "link-foo">lien</Link>
                        <Link to = "" className = "link-foo">lien</Link>
                    </div>
                </div>
            </div>








             <center>
               
           </center>

*/