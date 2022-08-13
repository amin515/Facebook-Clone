import React from 'react';
import RegModal from '../../Components/BS_modal/RegModal';
import './Login.scss'
const Login = () => {

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
                    <form action="#">
                        <input className='login__form' type="text" placeholder='EMAIL OR PHONE'/>
                        <input className='login__form' type="text" placeholder='Password'/>
                        <button className='login__btn' type='submit'>Log In</button>
                    </form>
                    <div className="forgot__pass">
                      <a href="#">Forgotten Password?</a>
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
