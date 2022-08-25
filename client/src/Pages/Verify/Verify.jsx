
import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { createToast } from '../../utility/toast';
import './verify.scss';
const Verify = () => {

  const params = useParams();
 


  const navigate = useNavigate();

   
    useEffect( () => {
      axios.post('http://localhost:1150/api/user/verify_account', params)

     
      .then( res => {
        createToast('Verification successful')
        navigate('/login');
        console.log(res.data)
      })

      .catch(err => {
        createToast('Account activation failed')
      });


    });

  return (
    <div>
       <div className="verify">
         <div className="container">
            <h1>Verify your account</h1>
            <input type="text" className="form-control" />
         </div>
       </div>
    </div>
  )
}

export default Verify;
