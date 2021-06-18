import React, { useState } from 'react';
import { Form, InputGroup, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './panOnline.css';


export function HomePage(properties: any) : any
{
   
    return(
        <div className="BackGround">
                <Link to="/Login"><Button className="loginButton" type="submit">Login</Button></Link>
                <Link to="/Register"><Button className="registerButton" type="submit">Register</Button></Link>
        </div>
    );
}