import React, { useContext, useState }from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegModal from '../../Components/BS_modal/RegModal';
import axios  from 'axios';
import './Login.scss';
import { createToast } from '../../utility/toast';
import cookie from 'js-cookie';
import AuthContext from '../../Context/AuthContext';
import LoaderContext from '../../Context/LoaderContext';
const Login = () => {

  // use auth context
  const { dispatch } = useContext(AuthContext);
  // loader context

  const { loaderDispatch } = useContext(LoaderContext);

  // set input for data get in form data

  const [input, setInput] = useState({
    auth : '',
    password : ''
  })


  // navigate
  const navigate = useNavigate();


  // handle input
  const handleInput = (e) => 
  {
    e.preventDefault()
    setInput( (prev) => ({...prev, [e.target.name] : e.target.value}));
  }




  // submit form
  const handleSubmitLogin = async (e) =>
  {
   e.preventDefault();

   try {
    
  if(!input.auth || !input.password){
    createToast('All fields are required')
  }else{
   
    await axios.post('http://localhost:1150/api/User/login', { email : input.auth, password : input.password })

    .then( res => {

      if(res.data.user.isVerified){
        createToast('Login Successfuly')
        cookie.set('token', res.data.token);
        cookie.set('user', JSON.stringify(res.data.user));
  
  
        setInput( (prev) => ({
          auth : '',
          password : ''
        }));
        
        dispatch({type : 'LOGIN_USER_SUCCESS', payload : res.data.user });
        navigate('/');
        loaderDispatch({ type : 'LOADING_START'})
      }else{
        createToast('Please verify your account')
      }
      
    })
    
  }


   } catch (error) {
    


    createToast('wrong email or password');
   }


  }


  return (
    <div>
      <div className="login__container">
        <div className="login__wrapper">
            <div className="login__left">
                <div className="login__fb__logo">
                    <img src="https://i.ibb.co/mvY36fR/Screenshot-6.png" alt="Screenshot-6"/>
                </div>
                <div className="login__content">
                    <h2>Facebook helps you connect and share with the people in your life.</h2>
                </div>
            </div>
            <div className="login__right">
                <div className="login__wrap">
                    <form onSubmit={ handleSubmitLogin }>
                        <input className='login__form' type="text" name='auth' placeholder='EMAIL OR PHONE' value={ input.auth } onChange={ handleInput }/>
                        <input className='login__form' type="password" name='password' placeholder='Password'
                        value={ input.password } onChange={ handleInput }/>
                        <button className='login__btn' type='submit'>Log In</button>
                    </form>
                    <div className="forgot__pass">
                      <Link to="/forgot-password">Forgotten Password?</Link>
                    </div>
                    <div className="divider">
                    </div>
                    <div className="create__newaccount">
                    <RegModal />
                    </div>
                </div>
                <div className="create__page">
                    <a href="#" className='page__content'>Create a Pages</a>
                    <span className='page__business'> for a celebrity, brand or business.</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
