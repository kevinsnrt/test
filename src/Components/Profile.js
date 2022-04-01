import React from 'react';
import './loginStyle.css';
// import {container, form, col, button} from 'react-bootstrap';



import logo from './pic/logo.jpeg';
import vin from './pic/vin.jpeg';


function Profile () {

    return (
        <div className="Container-login">

            <div className="row justify-content-center pt-5">
                <div className="col-5 text-light ml-5">
                    <div className="title-profile">My Profile</div>
                        <div className="d-flex bd-highlight">
                <div className="p-1 flex-fill bd-highlight">
                 <img className="img-top"  src={vin} alt="" style={{width: '80%'}}/>
                </div>
                <div className="p-2 flex-fill bd-highlight">
                         <p>Name <br/>
                         kevin</p>
                         <p>Email<br/>
                         kevin@mail.com</p>
                         <p>Phone<br/>
                         083896833122</p>
                         <p>Gender<br/>
                         male</p>
                         <p>Address<br/>
                         pangururan,Kab.Samosir</p>
                         </div>
                    </div>
                    </div>
                    <div className="col-5 text-light ">
                        <div className="title-profile">Transaction</div>
                            <div className='transaction group'>
                                <div className="card">
                                    <div className="card-body bg-dark">
                                    <div className="row justify-content-center">
                                        <div className="col-4">
                                             <p>Mouse</p>
                                             <p>Saturday, 14 July 2021</p>
                                             <p>Price : Rp.500.000</p>
                                             <p>Sub total : 500.000</p>
                                         </div>
                                         <div className="col-4 align-item-end">
                                         <img className="img-top"  src={logo} alt="" style={{width: '50%'}}/>
                                        </div>
                                    </div>
                                    
                                    </div>
                                </div>

                    </div>

                    
                    
                
            </div>
        </div>
    </div>    
    )
};

export default Profile;