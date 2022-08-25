
import axios from 'axios';
import React from 'react'
import { useState } from 'react';

const ForgotPassword = () => {

    // email state
    const [email, setEmail] = useState({
        email : ''
    });

// alert state

const [alert, setAlert] = useState({
    type : '',
    msg : '',
    status : false
})

    // submit veryfication link
    const handleSubmitVerifyLink = async (e) => 
    {
        e.preventDefault();
      
        try {
            await axios.post('http://localhost:1150/api/user/recover_password', email 
            )
            .then( res => {
                
                
                    setAlert({
                        type : 'success',
                        msg : 'Recovery link has been sent',
                        status : true
                      });

                    
                
               


               setEmail({
                   email : ''
               });
            })


            .catch( err => {
            
            
                setAlert({
                    type : 'danger',
                    msg : 'Email invalid or not exist',
                    status : true
                  });
            
             
            });



        } catch (error) {
            console.log(error)
        }
    }

    


  return (
    <div>
      <div className="forgot_password">
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="card-title">
                                <h2>Forgot your password</h2>
                            </div>
                            {
                               alert.status && <p className={`alert alert-${alert.type}`}>{alert.msg}</p>
                            }
                            
                            <form onSubmit={ handleSubmitVerifyLink }>
                                <div className="my-3">
                                    <input type="text" className="form-control" placeholder='Your email' name='email' value={ email.email } onChange={ e => setEmail({ email : e.target.value})}/>
                                </div>
                                <div className="my-3">
                                    <button type='submit' className='btn btn-primary w-100'>Send link</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default ForgotPassword;