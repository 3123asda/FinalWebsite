import React, { useState } from 'react';
import './../pagesCss/login.css';
import { useLocation, useNavigate } from 'react-router-dom';


function LogIn() {
  const [userEmail, getUserEmail] = useState('');
  const [userPassword, getUserPassword] = useState('');
  const LogInSucces = useNavigate();
  const CreateAccountUser = useNavigate();

  const location = useLocation();
  const { state } = location;
  const { userEmailCreated, userPasswordCreated, userCompleteName, userBirthday, userGender } = state || {};

  const SendDataEmail = userEmailCreated;
  const CompleteUserName = userCompleteName;
  const SentDataBirthDay = userBirthday;
  const SentDataGender = userGender;

  const logInAuthenticator = (event) => {
    event.preventDefault();
    if (userEmail === userEmailCreated && userPassword === userPasswordCreated) {
      const userAge = 18;
      const CompleteData = {
        userCompleteNamePass: CompleteUserName,
        userAgePass: userAge,
        userBirthdayPass: SentDataBirthDay,
        userGender: SentDataGender,
        userEmailPass: SendDataEmail
      };
      // Correct useNavigate function
      LogInSucces('/home', { state: CompleteData });
    } else {
      if (userEmailCreated === undefined) {
        alert('Create Account First')
      } else {
        alert('Log in Failed' + "\n" +
          "Email: " + userEmailCreated + "\n" +
          "Password: " + userPasswordCreated + "\n" +
          "Complete Name: " + userCompleteName + "\n"
        );
      }
    }
  };

  const CreateAccount = (event) => {
    event.preventDefault();
    CreateAccountUser('/create-account')
  }

  const ForgetPassword = () => {
    alert('Password: ' + userPasswordCreated)
  }

  return (
    <div className="backGroundColor">
      <div className='Log-inBox'>
        <form className='form-padding' onSubmit={logInAuthenticator}>
          <div className='Affordable-threads'>
            Affordable
          </div>
          <div className='Affordable-threads'>
            Threads
          </div>

          <div className='userForm'>
            <div className='Email-PasswordInputPadding'>
              <input
                className='Email-PasswordInput'
                type='text'
                placeholder='Email or phone'
                value={userEmail}
                onChange={(AfterGetEmail) => getUserEmail(AfterGetEmail.target.value)}
              />
            </div>

            <div className='Email-PasswordInputPadding'>
              <input
                className='Email-PasswordInput'
                type='password'
                placeholder='Password'
                value={userPassword}
                onChange={(AfterGetPassword) => getUserPassword(AfterGetPassword.target.value)}
              />
            </div>

            <div className='Email-PasswordInputPadding'>
              <input className='Design-button' type='submit' value='Log In' />
            </div>

            <div className='ForgetPassword' onClick={ForgetPassword}>
              <label>Forget Password?</label>
            </div>

            <div className='PaddingDefault'>
              <hr />
            </div>
          </div>
        </form>

        <div className='CreateAccountFlex'>
          <form onSubmit={CreateAccount}>
            <div className='Email-PasswordInputPadding'>
              <input className='Design-button' type='submit' value='Create Account' />
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}

export default LogIn;
