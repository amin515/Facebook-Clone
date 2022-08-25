import User from '../Models/UserModels.js'
import bcrypt from 'bcryptjs';
import customError from './createCustomError.js';
import jwt from 'jsonwebtoken'
import { sendEmail } from '../utility/sendEmail.js';
import { createToken } from '../utility/craeteToken.js';
import TokenModels from '../Models/TokenModels.js';



/**
 * @access public
 * @method get 
 * @status get all users
 * @route /api/User
 */
 export const getAllUser = async (req, res, next) => {
    
    try{
        const user = await User.find()
        res.status(200).json(user)
    }catch(error){

        next(customError(404, 'User data not found'));
       
    }
}



/**
 * @access public
 * @method get 
 * @status get single user
 * @route /api/user/id
 */
  export const getSingleUser = async (req, res, next) => {

    const { id } = req.params;
    try{
        
        const user = await User.findById(id)
        if(!user){
            next(customError(404, 'No single user found'))
        }
        if(user){
            res.status(200).json(
                user
            )
        }
    }catch(error){
        next(customError(404, 'User data not found'));
    }
}


/**
 * @access public
 * @method post 
 * @status create user
 * @route /api/user
 */
  export const createUser = async (req, res, next) => {

   // make hash password
   const salt = await bcrypt.genSalt(10);
   const hash_pass = await bcrypt.hash(req.body.password, salt);


    try{
    
        const user = await User.create({ ...req.body, password : hash_pass});
        res.status(200).json(
            user
        )
    }catch(error){
        next(customError(404, 'User data not found'));
    }
}

/**
 * @access public
 * @method put/patch 
 * @status update students
 * @route /api/students/id
 */
  export const updateUser = async (req, res, next) => {
     const { id } = req.params;
    try{
        
        const user = await User.findByIdAndUpdate(id, req.body,{
            new : true
        })
        res.status(200).json(
            user
        )
    }catch(error){
       
        next(customError(404, 'User data not found'));
    }
}


/**
 * @access public
 * @method delete 
 * @status delete User
 * @route /api/user/id
 */
  export const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    try{
        
        const user = await User.findByIdAndDelete(id)
        res.status(200).json(
            user
        )
    }catch(error){
        
        next(customError(404, 'User data not found'));
    }
}

// authenticaton controllers

/**
 * @access public
 * @method post 
 * @status user login
 * @route /api/user/login
 */
 export const userLogin = async (req, res, next) => {

   // get body data


   //find user
   const login_user = await User.findOne({ email : req.body.email })

   try {
    
    // check user exist or not
    if(!login_user){
       return next(customError(404, 'user not found'))
    }

    // password check 
    const pass_check = await bcrypt.compare(req.body.password, login_user.password);

   // password valid or not
    if(!pass_check){
       return  next(customError(404, 'wrong password'))
    }

    // finaly data send if ok

    // json web token generator
    const token = jwt.sign({ id : login_user._id , isAdmin : login_user.isAdmin}, process.env.JWT_SECRET);
    
    // reverse element from data
    const {password, isAdmin, ...login_info} = login_user._doc;
    res.cookie("access_token", token).status(200).json({
        token : token,
        user : login_info,
    })


   } catch (error) {
     next(error)
   }
     
 }


 /**
 * @access public
 * @method post 
 * @status user register
 * @route /api/user/register
 */
  export const userRegister = async (req, res, next) => {

    // make hash password
 
    const salt = await bcrypt.genSalt(10);
    const hash_pass = await bcrypt.hash(req.body.password, salt);
 
    // data send
     try{
     
         const user = await User.create({ ...req.body, password : hash_pass });

        // create token
        const token = createToken({ id : user._id});

        // update token
        await TokenModels.create({userId : user._id, token : token})
        // sent activation email
        const verify_link = `http://localhost:3000/user/${user._id}/verify/${token}`

         await sendEmail(user.email, 'verify account', verify_link);

         res.status(200).json( user )
             
     }catch(error){
         next(error);
     }
  
     
 }


export const loggedInUser = async (req, res, next) => {



    try {

        //get token

        const bearar_token = req.headers.authorization;
        let token = '';

        if(bearar_token){
           token = bearar_token.split(' ')[1]



           // get user
           const loggedin_user = jwt.verify(token, process.env.JWT_SECRET)
            console.log(loggedin_user)


            // check valid user or not
            if(!loggedin_user){
                res.send(customError(404, 'Invalid token'))
            }

            // if valid user
            if(loggedin_user){
                const user = await User.findById(loggedin_user.id)
                res.send(user)
            }
        }


        if(!bearar_token){
            next(customError(404, 'Token not found'))
        }
    } catch (error) {
        console.log(error)
    }
   
 }


 
/**
 * @access public
 * @method post 
 * @status user/verify
 * @route /api/user/verify_acc
 */

// verify user account
export const verifyUserAccount = async (req, res, next) => {
  
    try {
 
     const { id, token } = req.body;
    
     const  verify_user = await TokenModels.findOne({ userId : id, token : token})
     console.log(verify_user)
 
     //check url valid or not
     if(!verify_user){
         next(customError(404, 'Invalid verify url'))
     }
 
     if(verify_user){
        
         await User.findByIdAndUpdate( id, {
             isVerified : true
         })
         res.status(200).json({ message : 'Account verify successful'});
         verify_user.remove();
     }
 
    } catch (error) {
      console.log(next(error))
    }
 }


 // password recovery

 export const recoverPassword = async (req, res, next) => {

  try {
  
    // get email

    const { email } = req.body;
  
   // check email
 const recover_user = await User.findOne({ email })

 // check email exist or not

 if(!recover_user){
    res.status(404).json({
        message : "email doesn't exist"
    })
 }
 // if email exist
 if(recover_user){
   
    const token = createToken({ id : recover_user._id }, '300s');
    const recovery_url = `http://localhost:3000/recover-password/${token}`

    // create temorarilily token into Token.js
    await TokenModels.create({
        userId : recover_user._id,
        token : token
    });

    await sendEmail(recover_user.email, 'Reset Password', recovery_url)
    res.status(200).json({
        message : "reset link sent"
    })

 }


  } catch (error) {
    console.log(error)
  }

 }


 // reset password

export const passwordReset = async (req, res, next) => {
 
  try {
    
    // get form data
  const { token, password } = req.body;

  // get user id
   const { id } = jwt.verify(token, process.env.JWT_SECRET)
   
   
      // make hash password
      const salt = await bcrypt.genSalt(10);
      const hash_pass = await bcrypt.hash(password, salt);

   if(id){
   // get user deatils
   const user_details = await User.findByIdAndUpdate(id, {
     password : hash_pass
   });
    res.send('Password Changed succefully')
   }



  } catch (error) {
   console.log(next(error))
  }

 }