import React, { useState } from 'react'
import NavBar from './../navigation/navigationBar.js'
import './../pagesCss/home.css'
import { useLocation } from 'react-router-dom'


function Home() {

  const location = useLocation();
  const { state } = location;

  /*
  The state array arrange is same variable name as 
    state array in the where the data value come from
  */
  const { userCompleteNamePass, userAgePass, userBirthdayPass, userGender, userEmailPass } = state || {};
  console.log('complete name', userCompleteNamePass)
  console.log('Age', userAgePass)
  console.log('Birthday', userBirthdayPass)
  console.log('Gender', userGender)

  var completeName = userCompleteNamePass;
  if (completeName == null) {
    completeName = "James Christopher Tagupa"
  }

  const [EditProfileBool, setBool] = useState(true);
  const [EditFirstName, setEditFN] = useState(() => {
    const nameArray = completeName.split(" ");
    const SplitFirstName = nameArray.slice(0, nameArray.length - 1).join(' ');
    return SplitFirstName
  });
  const [EditLastName, setEditLN] = useState(() => {
    const nameArray = completeName.split(' ');
    const SplitLastName = nameArray.slice(nameArray.length - 1);
    return SplitLastName;
  });
  const [EditMobileNumberOrEmail, setEditMNE] = useState(userEmailPass);
  const [EditBirthDay, setEditBD] = useState(userBirthdayPass);
  const [EditGenDer, setEditGD] = useState(userGender);
  const [profileName, setProfileName] = useState(userCompleteNamePass)
  console.log("Gender", EditGenDer)
  console.log('First Name:', EditFirstName);
  console.log('Last Name:', EditLastName);

  const UserInfoFormArr = [userCompleteNamePass, userAgePass, userBirthdayPass, userGender, userEmailPass];

  const UserEditCompleteName = () => {
    return `${EditLastName} ${EditFirstName}`
  }

  const CalculateAgeUser = () => {
    const currentDate = new Date();
    const userBirthDate = new Date(EditBirthDay);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const userBirthYear = userBirthDate.getFullYear();
    const userBirthMonth = userBirthDate.getMonth();
    const userBirthDay = userBirthDate.getDate();

    const calculateYearAge = currentYear - userBirthYear;
    let FinalcalculateYearAge = calculateYearAge;

    if (currentMonth < userBirthMonth || (currentMonth === userBirthMonth && currentDay < userBirthDay)) {
      FinalcalculateYearAge = calculateYearAge - 1
    } else {
      FinalcalculateYearAge = calculateYearAge
    }

    return FinalcalculateYearAge

  }

  const UserEditInfo = {
    userCompleteNamePass: UserEditCompleteName(),
    userAgePass: CalculateAgeUser(),
    userBirthdayPass: EditBirthDay,
    userGender: EditGenDer,
    userEmailPass: EditMobileNumberOrEmail
  }

  const UserDoneEdit = UserInfoFormArr.map((UserPreviousInfo, IndexOfInfo) => {
    const ChangeName = Object.keys(UserEditInfo)[IndexOfInfo];
    return UserEditInfo.hasOwnProperty(ChangeName) ?
      UserEditInfo[ChangeName]
      : UserPreviousInfo;
  })

  const EditProfile = (event) => {
    event.preventDefault();
    setBool(!EditProfileBool)
  }

  const ProfileNameFunction = (event) => {
    event.preventDefault();
    if (EditFirstName === '') {
      alert('First name is blank')
    } else if (EditLastName === '') {
      alert('Last name is blank')
    } else {
      setEditGD(UserDoneEdit[3])
      setProfileName(UserDoneEdit[0])
    }
  }


  const SaveProfile = (event) => {
    event.preventDefault();

    setBool(!EditProfileBool);
    ProfileNameFunction(event);

    // Display what inside the array
    alert("Complete Name: " + UserDoneEdit[0] + "\n" +
      "Age: " + UserDoneEdit[1] + "\n" +
      "BirthDay: " + UserDoneEdit[2] + "\n" +
      "Gender: " + UserDoneEdit[3] + "\n" +
      "Age: " + UserDoneEdit[1] + "\n"

    )

  }

  const CancelProfileEdit = (event) => {
    event.preventDefault();
    setBool(!EditProfileBool);
  }

  return (
    <div>
      <NavBar />
      <div className='Home-message'>
        <div className='DefaultBoxContent'>

          <div className='DefaultProfileValue'>
            <img className='DefaultProfilePic '
              src='./Images/Profile.jpg'
              alt='Profile' />
          </div>

          <div className='DefaultUserNameValue'>
            <p>{profileName}</p>
          </div>

          <div className='DefaultFormInfoValue'>
            {EditProfileBool ? <div className='FormInfoContentValue' >
              <p className='DefaultFormPaddingValue'
              >Complete name:{profileName}
              </p>

              <p className='DefaultFormPaddingValue DefaultDataPaddingValue'
              >{UserDoneEdit[0]}
              </p>

              <p className='DefaultFormPaddingValue '
              >Mobile number or email:
              </p>

              <p className='DefaultFormPaddingValue DefaultDataPaddingValue'
              >{userEmailPass}
              </p>

              <p className='DefaultFormPaddingValue'
              >Birthday:
              </p>

              <p className='DefaultFormPaddingValue DefaultDataPaddingValue'
              >{UserDoneEdit[2]}
              </p>

              <p className='DefaultFormPaddingValue'
              >Gender:
              </p>

              <p className='DefaultFormPaddingValue DefaultDataPaddingValue'
              >{EditGenDer}
              </p>

              <form onClick={EditProfile}>
                <div className='DefaultContentButton'>
                  <button className='DefaultButton'>Edit</button>
                </div>
              </form>

            </div> :

              //If the User Press the Button it will turn the Bool into False

              <div className='DefaultEditProfile' >

                <p>First name</p>
                <input className='InputInfoUser'
                  type='text'
                  placeholder='First name'
                  value={EditFirstName}
                  onChange={(EditUserFN) => setEditFN(EditUserFN.target.value)}
                />

                <p>Last name</p>
                <input className='InputInfoUser'
                  type='text'
                  placeholder='Last name'
                  value={EditLastName}
                  onChange={(EditUserLN) => setEditLN(EditUserLN.target.value)}
                />

                <p>Mobile number or email</p>
                <input className='InputInfoUser'
                  type='text'
                  placeholder='Mobile number or email'
                  value={EditMobileNumberOrEmail}
                  onChange={(EditUserMNE) => setEditMNE(EditUserMNE.target.value)}
                />

                <p>Birthday</p>
                <input className='InputInfoUser'
                  type='date'
                  placeholder='Birthday'
                  value={EditBirthDay}
                  onChange={(EditUserBD) => setEditBD(EditUserBD.target.value)}
                />


                <p>Gender</p>
                <input type='radio'
                  name='gender'
                  value='Male'
                  checked={EditGenDer === 'Male'}
                  onChange={(EditUserGD) => setEditGD(EditUserGD.target.value)}
                />
                <label className='PaddingGender'>Male</label>

                <input type='radio'
                  name='gender'
                  value='Female'
                  checked={EditGenDer === 'Female'}
                  onChange={(EditUserGD) => setEditGD(EditUserGD.target.value)}
                />
                <label className='PaddingGender'>Female</label>

                <input type='radio'
                  name='gender'
                  value='Prefer not to say'
                  checked={EditGenDer === 'Prefer not to say'}
                  onChange={(EditUserGD) => setEditGD(EditUserGD.target.value)}

                />
                <label className='PaddingGender'>Prefer not to say</label>

                <form onClick={SaveProfile}>
                  <div className='DefaultContentButton DefaultContentButtonSave'>
                    <button className='DefaultButton'>Save</button>
                  </div>
                </form>

                <form onClick={CancelProfileEdit}>
                  <div className='DefaultContentButton DefaultContentButtonCancel'>
                    <button className='DefaultButton'>Cancel</button>
                  </div>
                </form>
              </div>
            }
          </div>


          <div className='DefaultOrderValues'>
            <iframe src='./OrderUser/OrderNoti.html' className='DefaultIFrame'></iframe>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Home