import React from 'react';
import './index.css';
import Logo from '../../img/logoDefinitiva.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header () {
    return(
        <div className="header contaier-fluid">
            <div className="container d-flex justify-content-center align-items-center">
                <img className="logo" src={Logo} alt="logo SD Engenharia" />
            </div>
        </div>
    );
}

export default Header;