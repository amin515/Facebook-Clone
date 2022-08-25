

import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createToast } from '../../utility/toast';

const ResetPassword = () => {

    //get token
   const { token } = useParams();
  

   // navigator
   const navigate = useNavigate()

   // password state
   const [password, setPassword] = useState('')
   const [cpassword, setCPassword] = useState('')
 
    
   
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
        
      if(!password || !cpassword){
        setAlert({
            type : 'danger',
            msg : 'field can\'t be empty',
            status : true
           })
      }else if(password !== cpassword){
        setAlert({
            type : 'warning',
            msg : 'password don\'t match',
            status : true
           })
      }else{


      await axios.post('http://localhost:1150/api/user/reset-password', {
        token : token,
        password : password
      })
      .then( res => {
        console.log(res.data)
         createToast('Password changed')
         navigate('/login')
      })
      .catch(err => {
       createToast('Time out please try again')
      });
      }

       } catch (error) {
       createToast('Try again')
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
                                <h2>Reset your password</h2>
                            </div>
                            {
                               alert.status && <p className={`alert alert-${alert.type}`}>{alert.msg}</p>
                            }
                            
                            <form onSubmit={ handleSubmitVerifyLink }>
                                <div className="my-3">
                                    <input type="password" className="form-control" placeholder='New password' name='password' value={ password } onChange={ e => setPassword(e.target.value)}/>
                                </div>
                                <div className="my-3">
                                    <input type="password" className="form-control" placeholder='Confirm new password' name='cpassword' value={ cpassword } onChange={ e => setCPassword(e.target.value)}/>
                                </div>
                                <div className="my-3">
                                    <button type='submit' className='btn btn-primary w-100'>Change Password</button>
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

export default ResetPassword;

               