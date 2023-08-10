import React, { useState } from 'react'
import './../pagesCss/createAccount.css'
import { useNavigate } from 'react-router-dom'


function CreateAccount() {

    const [userFirstName, getFirstName] = useState('')
    const [userLastName, getLastName] = useState('')
    const [userMobileNumOrEmail, getMobileNumOrEmail] = useState('')
    const [userPassword, getPassword] = useState('')
    const [userBirthDay, getBirthDay] = useState('')
    const [userGender, getGender] = useState('')
    const SucCreAcc = useNavigate();

    const FillUpFormDetails = (event) => {
        event.preventDefault();
        alert("First Name: " + userFirstName + "\n" +
            "Last Name: " + userLastName + "\n" +
            "Mobile number or email: " + userMobileNumOrEmail + "\n" +
            "Password: " + userPassword + "\n" +
            "Birthday: " + userBirthDay + "\n" +
            "Gender: " + userGender + "\n" +
            "Get Message" + giveUserMessage
        )
    }

    const [giveUserMessage, seeUserMessage] = useState(false);

    const userMessage = (event) => {
        //seeUserMessage(!giveUserMessage)
        if (userFirstName === '') {
            event.preventDefault();
            alert('First name is blank')

        } else if (userLastName === '') {
            event.preventDefault();
            alert('Last name is blank')

        } else if (userMobileNumOrEmail === '') {
            event.preventDefault();
            alert('Mobile number or email is blank')

        } else if (userPassword === '') {
            event.preventDefault();
            alert('Password is blank')

        } else if (userBirthDay === '') {
            event.preventDefault();
            alert('Birthday is blank')

        } else if (userGender === '') {
            event.preventDefault();
            alert('Gender is blank')

        } else {
            seeUserMessage(!giveUserMessage);
            FillUpFormDetails(event);
        }

    }

    const Proceed = (event) => {
        event.preventDefault();
        const CompleteName = `${userFirstName} ${userLastName}`;
        const userData = {
            userEmailCreated : userMobileNumOrEmail,
            userPasswordCreated: userPassword,
            userCompleteName: CompleteName,
            userBirthday:userBirthDay,
            userGender:userGender
        };
        SucCreAcc('/',{state:userData})
    }

    return (
        <div className='divBackGroud'>
            <div className='divBox'>
                <div className='LogoBox'>
                    <img src='./Images/Logo.png' alt='Logo' className='Logo' />
                </div>
                <div className='FormBox'>
                    <div className='FormBoxPaddingAndCenter'>
                        <h3 className='SignUpTextDesign'>Sign Up</h3>
                        <div className='opacity'>
                            <p>It's quick and easy.</p>
                            <hr></hr>
                        </div>
                        <div className='FillUpForm'>
                            <form onSubmit={FillUpFormDetails}>

                                <div className='tooltip' >
                                    <input
                                        className='InputInfoUser'
                                        type='text'
                                        placeholder='First name'
                                        value={userFirstName}
                                        onChange={(AfterGetFirstName) => getFirstName(AfterGetFirstName.target.value)}
                                    />
                                    <span className='tooltiptext'>
                                        <p className='TextPaddingDefault TextSizeDefault'>What's your first name</p>
                                    </span>
                                </div>


                                <div className='DefaultPadding'>
                                    <div className='tooltip'>
                                        <input
                                            className='InputInfoUser'
                                            type='text'
                                            placeholder='Last name'
                                            value={userLastName}
                                            onChange={(AfterGetLastName) => getLastName(AfterGetLastName.target.value)}
                                        />
                                        <span className='tooltiptext'>
                                            <p className='TextPaddingDefault TextSizeDefault'>What's your last name</p>
                                        </span>
                                    </div>
                                </div>

                                <div className='DefaultPadding'>
                                    <div className='tooltip'>
                                        <input
                                            className='InputInfoUser'
                                            type='text'
                                            placeholder='Mobile number or email'
                                            value={userMobileNumOrEmail}
                                            onChange={(AfterGetMobileNumOrEmail) => getMobileNumOrEmail(AfterGetMobileNumOrEmail.target.value)}
                                        />
                                        <span className='tooltiptext'>
                                            <p className='TextPaddingDefault TextSizeDefault'>What's your mobile number or email</p>
                                        </span>
                                    </div>
                                </div>

                                <div className='DefaultPadding'>
                                    <div className='tooltip'>
                                        <input
                                            className='InputInfoUser'
                                            type='text'
                                            placeholder='New password'
                                            value={userPassword}
                                            onChange={(AfterGetPassword) => getPassword(AfterGetPassword.target.value)}
                                        />
                                        <span className='tooltiptext'>
                                            <p className='TextPaddingDefault TextSizeDefault'>Tip: password should combation of letter's,<br /> number and punctuation mark </p>
                                        </span>
                                    </div>
                                </div>

                                <div className='DefaultPadding'>
                                    <div className='tooltip'>
                                        <input
                                            className='InputInfoUser'
                                            type='date'
                                            placeholder='Birthday'
                                            value={userBirthDay}
                                            onChange={(AfterGetBirthDay) => getBirthDay(AfterGetBirthDay.target.value)}
                                        />
                                        <span className='tooltiptext'>
                                            <p className='TextPaddingDefault TextSizeDefault'>When your birthday?</p>
                                        </span>
                                    </div>
                                </div>

                                <div className='DefaultPadding'>
                                    <div className='tooltip'>
                                        <input type='radio'
                                            name='gender'
                                            value='Male'
                                            onChange={(AfterGender) => getGender(AfterGender.target.value)}
                                        />
                                        <label className='radiousPadding'>Male</label>

                                        <input type='radio'
                                            name='gender'
                                            value='Female'
                                            onChange={(AfterGender) => getGender(AfterGender.target.value)}
                                        />
                                        <label className='radiousPadding'>Female</label>

                                        <input type='radio'
                                            name='gender'
                                            value='Prefer Not to Say'
                                            onChange={(AfterGender) => getGender(AfterGender.target.value)}
                                        />
                                        <label className='radiousPadding'>Preferd not to say</label>

                                        <span className='tooltiptext'>
                                            <p className='TextPaddingDefault TextSizeDefault'>What's your gender</p>
                                        </span>
                                    </div>
                                </div>


                                <div className='DefaultPadding'>
                                    <input className='Design-button'
                                        onClick={userMessage}
                                        type='submit'
                                        value='Sign Up' />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {giveUserMessage && (
                <div className='ModalBox'>
                    <div className='ContentSet'>
                        <div className='ContentSetText'>

                            <p >Congrats! Account successfully created!</p><br />
                            <form onSubmit={Proceed}>
                                <input className='ProceedButton'
                                    type='submit'
                                    value='Proceed'
                                />
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CreateAccount