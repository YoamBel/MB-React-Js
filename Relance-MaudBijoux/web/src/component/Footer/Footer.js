import React from 'react';
import FooterBot from './FooterBot';
import FooterTop from './FooterTop';
import './styles/Footer.css'

const Footer = () => {

    return (
        <div className = "ct-footer">
            <FooterTop/>
            <FooterBot/>
            
        </div>
    )
}

export default Footer
