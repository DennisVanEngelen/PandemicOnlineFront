import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './UserLogin.css'

export interface IRegisterUser 
{
    password: string;
    username: string;
    emailadress: string;
}

export function RegisterUser(properties: any) : any
{
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [emailadress, setEmailadress] = useState<string>("")

    const [RegisterUser, setRegisterUser] = useState<IRegisterUser>()

    
    return(
        <div className="BackGround">
        <Form onSubmit={(e) => {
            e.preventDefault();
            axios.post(`http://localhost:8080/api/User/addUser`, {username, password, emailadress})
                .then(res => {
                    console.log(res.data)
                    
                })}}>

            <div className="Userbox">
                <Form.Group >
                    <div className="padding" >
                        <Form.Label>
                        <p className="title">Register</p>
                        </Form.Label>
                        <div className="lineup"></div>
                        <Form.Label>
                        <p className="label">Username</p>
                        </Form.Label>
                            <div >
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        id= "Username"
                                        className="textbox"
                                        value={username}
                                        onChange={(e) => {
                                            setUsername(e.target.value)
                                        }}
                                        required
                                    />
                                </InputGroup>
                            </div>
                    <div>
                        <Form.Label>
                                <p className="label">Password</p>
                        </Form.Label>
                    </div>
                    <div >
                        <InputGroup>
                            <Form.Control
                                type="password"
                                id= "Password"
                                className="textbox"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                required
                            />
                        </InputGroup>
                    </div>
                    <Form.Label>
                        <p className="label">Emailadress</p>
                        </Form.Label>
                            <div >
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        id= "Emailadress"
                                        className="textbox"
                                        value={emailadress}
                                        onChange={(e) => {
                                            setEmailadress(e.target.value)
                                        }}
                                        required
                                    />
                                </InputGroup>
                            </div>
                    <div className="linebottom"></div>
                    <div className="padding">
                     <Button className="loginButton" type="submit">Register</Button>
                    </div>   
                    <div className = "padding">
                    <Link to="/Login"><Button className="loginButton" type="submit">Login</Button></Link>
                        </div>      
                    </div>
                </Form.Group>
             </div>
        </Form>
    </div>
    );
}
