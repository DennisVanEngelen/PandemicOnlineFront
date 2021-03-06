import React, { useState } from 'react';
import { Form, InputGroup, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './panOnline.css'

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
    const [ding, setDing] = useState<string>("")

    const [RegisterUser, setRegisterUser] = useState<IRegisterUser>()

    
    return(
        <div className="BackGround">
        <Form onSubmit={(e) => {
            e.preventDefault();
            const payload = {username, password, emailadress}
            axios.post(`http://localhost:8080/api/user`, payload )
                .then(res => {

                    setDing(res.data)
                    console.log(res.data)
                    
                })}}>

            <div className="Userbox">
                <Form.Group >
                    <div className="padding" >
    
                        <Form.Label>
                        <p className="title">Registration</p>
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
                                        className="username"
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
                                className="password"
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
                                        className="email"
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
                     <Button className="registerButton" type="submit">Register</Button>
                    </div>     
                    </div>
                </Form.Group>
             </div>
        </Form>
    </div>
    );
}
