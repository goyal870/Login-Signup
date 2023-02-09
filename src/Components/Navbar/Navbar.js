import React, {useState, useEffect} from 'react'
import './Navbar.css'
// import myLogo from './cdac.jpg';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
        
    }

  }, [])

  return (
    <div className="topbar">
      <ul className="left">
        <li><img className="logo" src="cdac.png" width="65" height="40" alt="" /></li>
      </ul>
      {/* <ul className="right">
        <li><button className="bttn" type="submit" ><p>Login</p></button><button className="bttn" type="submit"><p>Signup</p></button></li>
      </ul> */}
      
      <div className="center"> 
      <nav>
      
        {(toggleMenu || screenWidth > 500) &&  (
        
      <ul className="list">
        {/* <li><img className="logo" src="./cdac.png" width="65" height="40" /></li> */}
        <ul className="list">
          <li className="items">Home</li>
          <li className="items">About</li>
          <li className="items">Contact</li>
          <li className="items">Services</li>
        {/* <li className="items"><button className="bttn" type="submit"><p>Login</p></button><button className="bttn" type="submit"><p>Signup</p></button></li> */}
        {/* <li className="items"></li> */}
        {/* <li className="items">Login/Signup</li> */}
        </ul>
        <ul className="rights">
          <li className="right">
            <button className="bttn" type="submit"><p>Login</p></button>
            <button className="bttn" type="submit"><p>Signup</p></button>
          </li>
        </ul>
      </ul>
        
    
      )}
      <Loggin />
    </nav>
    </div>
    {/* <ul classNmae="right">
      <li><button className="bttn" type="submit" ><p>Login</p></button><button className="bttn" type="submit"><p>Signup</p></button></li>
    </ul> */}
      {/* <img src="./lap.png"></img> */}
      {/* <div class="bg-image" 
     style="background-image: url('bg.jpg);
            height: 100vh">
</div> */}
      <button onClick={toggleNav} className="btn">≡</button>
      
    
    </div>
  )
}
function Loggin() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <h1>@2023 copyright:cdac.in</h1>
      </form>
    </div>
  );

  return (
    
    <div className="app">
       {/* <br /><br /> */}
       {/* <div className="login-image">
          <img src="bg.jpg" alt="registration pic" max-width='100%' />
        </div> */}
      <div className="login-form">
       
        <div className="title">Login</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
      
    </div>
  );
}

// export default Loggin;

