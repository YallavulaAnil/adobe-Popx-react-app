import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return(
        <div className="container">
            <div className="card">
                <div className="bottom">
                    <h1>Welcome to PopX</h1>

                    <p>Lorem ipsum dolor sit amet
                    consectetur adipiscing elit
                    </p>

                    <button
                        className="primaryBtn"
                        onClick={() => navigate("/register")}
                    >
                        Create Account
                    </button>

                    <button
                        className="secondaryBtn"
                        onClick={() => navigate("/login")}
                    >
                        Already Register? Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;