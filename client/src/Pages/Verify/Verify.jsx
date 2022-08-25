
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
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="card shadow">
                <div className="card-body">
                  <div className="card-title">
                    <h4>Thank you for verified your email</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Verify;
