import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import logo from '../../assets/logo.jpg';
import linkedin from '../../assets/linkedin.svg';
import './Footer.css';

const Footer = () => {
    return (
        <Auxiliary> 
            <footer className="Footer">
                <div className="LogoF">
                    <img className="ImageF" src={logo} alt="logo" />
                </div>
                <div className="Credo">
                <p>New waves of synergy</p>
                </div>
                <div className="Menu">
                    <a href="https://www.linkedin.com/in/nadiia-voloshyna">
                    <img className="Img" src={linkedin} alt="linkedin" />
                    </a>
                </div>
           </footer>
        </Auxiliary>
    );
  }
  
  export default Footer;