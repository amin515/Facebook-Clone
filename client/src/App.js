
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthenticateUser from './Middleware/AuthenticateUser';
import AuthRedirectUser from './Middleware/AuthRedirectUse';
import Cookie from 'js-cookie';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import AuthContext from './Context/AuthContext';
import LoadingBar from 'react-top-loading-bar'
import LoaderContext from './Context/LoaderContext';
import { createToast } from './utility/toast';
import Verify from './Pages/Verify/Verify';
import 'bootstrap/dist/css/bootstrap.min.css';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import ResetPassword from './Pages/ResetPassword/ResetPassword';


function App() {


// get cookies
const token = Cookie.get('token');


// usecontext

const { dispatch } = useContext(AuthContext)

// user refresh data

useEffect(() => {
 
try {
  

axios.get('http://localhost:1150/api/user/me', {
  headers : {
    "authorization" : `bearer ${token}`
  }
})
.then( res => {
 
  // verify account
  if(res.data.isVerified && token){
    dispatch({ type : 'LOGIN_USER_SUCCESS', payload : res.data })
  }else{
    Cookie.remove('token');
    createToast('plz verify your account')
  }
})
.catch( err => {

  dispatch({ type : 'LOGOUT_USER'})

  
});

} catch (error) {
  console.log(error)
}


}, [token, dispatch])


// loaderContext
const {loaderState, loaderDispatch} = useContext( LoaderContext)







  return (
    <>
 
        <LoadingBar
        color='#f11946'
        progress={loaderState}
        onLoaderFinished={() => loaderDispatch({type : 'LOADING_END'})}
        />
     <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
    
    <Routes>
      <Route path="/"element={<AuthenticateUser><Home /></AuthenticateUser>}/>
      <Route path='/login' element={<AuthRedirectUser><Login /></AuthRedirectUser>} />
      <Route path='/user/:id/verify/:token' element={<Verify/>} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/recover-password/:token' element={<ResetPassword/>}/>
    </Routes>
    </>
   
  )
}
export default App;
