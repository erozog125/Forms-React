import React,{useState, useEffect} from 'react';
import './Register.css';
import { AiFillEye,AiFillEyeInvisible } from 'react-icons/ai';

export const Register = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [typePassword, setTypePassword] = useState('password');
  const [typeConfirmPassword, setTypeConfirmPassword] = useState('password');

  const handlePassword = () => {    
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
  },[showPassword, showConfirmPassword]);


  return (
    <form onSubmit={handleSubmit} className='frm-register' action="">
      <input type="text" name='username' placeholder='username' />
      <input type="email" name='email' placeholder='email' />
      <div className='lbl-pass'>
        <input type={typePassword} name='password' placeholder='password' />
        {showPassword ? <button onClick={handlePassword} className='btn-eye'><AiFillEyeInvisible /></button> : <button onClick={handlePassword} className='btn-eye'><AiFillEye /></button>}
      </div>
      <div className='lbl-pass'>
        <input type={typeConfirmPassword} name='confirmPassword' placeholder='confirm Password' />
        {showConfirmPassword ? <button onClick={handleConfirmPassword} className='btn-eye'><AiFillEyeInvisible /></button> : <button onClick={handleConfirmPassword} className='btn-eye'><AiFillEye /></button>}
      </div>      
      <button className='btn-register' type='submit'>Register</button>
    </form>    
  )
}
