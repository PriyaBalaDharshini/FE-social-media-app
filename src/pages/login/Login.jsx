import "./login.css"

function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginWrapperLeft">
                    <h3 className="loginLogo">SocialPedia</h3>
                    <p className="loginDesc">
                        Connect with friends and the world around you on SocialPedia
                    </p>
                </div>
                <div className="loginWrapperRight">
                    <div className="loginBox">
                        <input type="email" placeholder="Email" className="loginInput" />
                        <input type="password" placeholder="Password" className="loginInput" />
                        <button className="loginButton">Login</button>
                        <span className="loginForgot">Forgot Password?</span>

                        <button className="loginRegister">Create a New account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login