
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

function App() {


// get cookies
const token = Cookie.get('token');

console.log(token);


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
 

dispatch({ type : 'LOGIN_USER_SUCCESS', payload : res.data.user })


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
    </Routes>
    </>
   
  )
}
export default App;
