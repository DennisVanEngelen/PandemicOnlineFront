import react from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LOGO from './Logo.png'
import './panOnline.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface navProps {

}

export default function NavBar() {
    return (
        <nav className="mainContainer">
            <div className="content">
                <div className="LoginButton">
                    {localStorage.getItem("userid") === null ? 
                    
                    <button className="navButtonOne" 
                        onClick={() => {
                            window.location.href = 'http://localhost:3000/Login';
                        }} >Login</button> :
                <button className="navButtonOne" 
                        onClick={() => {
                            localStorage.removeItem("userid")
                            window.location.href = 'http://localhost:3000/Login';
                        }} >Logout</button>
                    }

                </div>
                <div className="LoginButton">
                    {localStorage.getItem("userid") === null ? 
                    
                    <button className="navButtonTwo" 
                        onClick={() => {
                            window.location.href = 'http://localhost:3000/Register';
                        }} >Registration</button> :
                <button className="navButtonTwo" 
                        onClick={() => {
                            window.location.href = 'http://localhost:3000/Chat';
                        }} >Chat</button>
                    }

                </div>
            </div>
        </nav>
    );
}
