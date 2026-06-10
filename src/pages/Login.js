import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = () => {
        const user  = JSON.parse(
            localStorage.getItem("user")
        );

        if(
            user &&
            user.email === email &&
            user.password === password
        ){
            navigate("/account");
        }else{
            alert("Invalid Credentials");
        }
    };

    return(
        <div className="container">
            <div className = "card">
                <h1> Signin to your PopX account</h1>

                <p> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                </p>

                <input
                    type = "email"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className="primaryBtn"
                    onClick={loginUser}
                >
                    Login
                </button>
            </div>
        </div>

    );
}

export default Login;