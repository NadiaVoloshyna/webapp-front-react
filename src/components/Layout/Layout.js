import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Header from './Header';
import './Layout.css';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <Auxiliary>
            <Header />
            <div className="Layout">{props.children}</div>
            <Footer />
        </Auxiliary>
      );
};
    
export default React.memo(Layout);