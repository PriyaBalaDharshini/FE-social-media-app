import './register.css'

function Register() {
    return (
        <div className="signin">
            <div className="signinWrapper">
                <div className="signinWrapperLeft">
                    <h3 className="signinLogo">SocialPedia</h3>
                    <p className="signinDesc">
                        Connect with friends and the world around you on SocialPedia
                    </p>
                </div>
                <div className="signinWrapperRight">
                    <div className="signinBox">
                        <input type="text" placeholder="Username" className="signinInput" />
                        <input type="email" placeholder="Email" className="signinInput" />
                        <input type="password" placeholder="Password" className="signinInput" />
                        <input type="password" placeholder="Confirm Password" className="signinInput" />
                        <button className="signinButton">Signup</button>
                        <button className="signinRegister">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register