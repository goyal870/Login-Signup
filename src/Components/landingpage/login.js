import React from "react";
import Navbar from './Components/Navbar/Navbar'


const Login = () => {
    return (
        <>
        <Navbar />
        <section className="login">
        {/* <div className='container'> */}

        <div className="login-content">
          {/* {Object.keys(errors).length === 0 && isSubmit ? (
            <div className="successful">Logged In Successfully</div>
          ) : (
            <div></div>
          )} */}
          <div className="login-form">
            <h2 className="form-title">Log in</h2>
            <form className="form-content" id="register-form" onSubmit={loginSubmit} >
              <div className="form-group">
                <i class="fa-solid fa-user"></i>
                <input
                  type="mail"
                  name="email"
                  id="email"
                  required
                  autoCapitalize="off"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="Enter Email"
                />
              </div>
              {errors.email && (
                <p className="validation-msgs">{errors.email}</p>
              )}

              <div className="form-group">
                <i class="fa-solid fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  id="pass"
                  autoCapitalize="off"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Enter Password"
                  required
                />
              </div>
              {errors.password && (
                <p className="validation-msgs">{errors.password}</p>
              )}

              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Login"
                />
              </div>
              <div className="form-group">
                <p>
                  <Link to="/forgot-password">Forgot password?</Link>
                </p>
              </div>
              <div className="form-group">
                <p>
                  Don't have an account?<Link to="/register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="login-image">
          <img src="lap.jpg" alt="registration pic" />
        </div>

        {/* </div> */}
      </section>
        </>
    )
}

export default Login;