import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import logo from '../../assets/logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <Auxiliary>
            <header className="Header">
                <div className="LogoH">
                    <img className="ImageH" src={logo} alt="logo" />
                </div>
                <div className="Portfolio">
                    <a href="http://localhost:3000/">Portfolio</a>
                </div>
        {/* //<div>ToolBar, SideDrawer, Backdrop</div> */}
            </header>
        </Auxiliary>
    );
  }
  Header.propTypes = {};
  
  export default Header;