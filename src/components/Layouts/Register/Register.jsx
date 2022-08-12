import React,{useState, useEffect} from 'react';
import './Register.css';
import { AiFillEye,AiFillEyeInvisible } from 'react-icons/ai';

export const Register = () => {

  const regexUsername = /^[a-zA-Z0-9]{3,20}$/;
  const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [typePassword, setTypePassword] = useState('password');
  const [typeConfirmPassword, setTypeConfirmPassword] = useState('password');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userValidate, setUserValidate] = useState('');
  const [emailValidate, setEmailValidate] = useState('');
  const [passwordValidate, setPasswordValidate] = useState('');
  const [confirmPasswordValidate, setConfirmPasswordValidate] = useState('');


  const handleusername = (event) => {   
      setUsername(event.target.value);
    }

  const handleEmail = (event) => {   
      setEmail(event.target.value);
    }
    
  const handlePass = (event) => {
      setPassword(event.target.value);
    }    

  const handlePassword = () => {    
    setShowPassword(!showPassword);    
  }

  const handleConfirmPass = () => {    
    setShowPassword(!showPassword);    
  }

  const handleConfirmPassword = () => {    
    setShowConfirmPassword(!showConfirmPassword);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  useEffect(() => {
    showPassword ? setTypePassword("text") : setTypePassword("password");
    showConfirmPassword ? setTypeConfirmPassword("text") : setTypeConfirmPassword("password");
    // validar username
    if(regexUsername.test(username)){
        setUserValidate('');
    }else{
        setUserValidate('letters or numbers,without spaces,minimum 3 characters and maximum 20 characters');
    }
    // validar email
    if(regexEmail.test(email)){
        setEmailValidate('');
    } else {
      setEmailValidate('invalid email');
    }
    // validar password
    if(regexPassword.test(password)){
        setPasswordValidate('');
    } else {
      setPasswordValidate('letters, numbers, special characters, minimum 8 characters');
    }
    // validar confirm password
    if(password === confirmPassword){
        setConfirmPasswordValidate('');
    } else {
      setConfirmPasswordValidate('passwords do not match');
    }
    
  },[showPassword, showConfirmPassword, username,email, password, confirmPassword]);


  return (
    <form onSubmit={handleSubmit} className='frm-register' action="">
      <input className='txt-username' autoComplete='off' type="text" onChange={handleusername} name='username' placeholder='username' />
      <p className='user-validate'>{userValidate}</p>
      <input type="email" name='email' onChange={handleEmail} placeholder='email' />
      <p className='user-validate'>{emailValidate}</p>
      <div className='lbl-pass'>
        <input type={typePassword} onChange={handlePass} name='password' placeholder='password' />
        {showPassword ? <button onClick={handlePassword} className='btn-eye'><AiFillEyeInvisible /></button> : <button onClick={handlePassword} className='btn-eye'><AiFillEye /></button>}        
      </div>
      <p className='user-validate'>{passwordValidate}</p>
      <div className='lbl-pass'>
        <input type={typeConfirmPassword} name='confirmPassword' onChange={handleConfirmPass} placeholder='confirm Password' />
        {showConfirmPassword ? <button onClick={handleConfirmPassword} className='btn-eye'><AiFillEyeInvisible /></button> : <button onClick={handleConfirmPassword} className='btn-eye'><AiFillEye /></button>}
      </div> 
      <p className='user-validate'>{confirmPasswordValidate}</p>     
      <button className='btn-register' type='submit'>Register</button>
    </form>    
  )
}
