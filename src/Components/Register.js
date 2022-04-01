import React from 'react';
import {Link, useHistory}  from "react-router-dom"
import './loginStyle.css';
// import {container, form, col, button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import logo from './pic/logo.jpeg'


function Register () {

    const navigate = useNavigate();

    const handleNavigateToLogin = () =>{

        navigate('/')
    }

    return (
        <div className="Container-login">
           <div className="row justify-content-center pt-5">
            <div className="col-4 text-light">
            <img className="card-img-top"  src={logo}alt="" style={{width: '150px'}}/>
                 <h2> Easy Fast and Reliable</h2>
                 <p>Go Shopping for marchendise, just go to dumb merch
                     shopping the biggest merchandise in Indonesia
                 </p>
                 <button type="button" className="btn btn-danger"onClick={handleNavigateToLogin} >Login</button>
                <button type="button" className="btn btn-dark">Register</button>
                </div>
                 <div className="col-4">
                    <div className="card bg-dark ">
                        <div className="card-body bg-dark">
                            <h5 className="card-title">Register</h5>
                            <form>
                                <div className="mb-3">
                                     <label htmlFor="exampleInputName1" className="form-label"></label>
                                    <input type="name" className="form-control" id="exampleInputName1" placeholder="Name"/>
   
                                </div>
                               
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email'/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label"></label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'/>
                                </div>
                                <div className="d-grid gap-2">
                                 <button className="btn btn-danger" type="button">Register</button>

                                </div>
                            </form>
                        </div>
                    </div>
                
                    
                    </div>
            </div>
        </div>    
    )
};

export default Register;