import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        agency: "Yes",
        image: ""
    });


const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    };

    const handleImage = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();

        reader.onloadend = () => {
            setFormData({
                ...formData,
                image: reader.result
            });
        };

        if(file){
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        localStorage.setItem(
            "user",
            JSON.stringify(formData)
        );

        navigate("/account");
    };

    return(
        <div className="container">
            <div className="card">
                <h1> Create your PopX account</h1>

                <input
                    type= "text"
                    name = " fullName"
                    placeholder="Full Name"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                />

                <input
                    type = "email"
                    name= "email"
                    placeholder="Email Address"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <input
                    type = "text"
                    name= "company"
                    placeholder= "Company Name"
                    onChange = {handleChange}
                />

                <div className="radio">
                    <label>
                        <input
                            type = "radio"
                            name = "agency"
                            value = "Yes"
                            checked = {formData.agency === "Yes"}
                            onChange={handleChange}
                        />
                        Yes
                    </label>

                    <label>
                        <input
                            type = "radio"
                            name = "agency"
                            value = "No"
                            checked = {formData.agency === "No"}
                            onChange={handleChange}
                        />
                        No
                    </label>
                </div>

                <input
                    type="file"
                    accept = "image/*"
                    onChange={handleImage}
                />

                <button
                    className="primaryBtn"
                    onClick={handleSubmit}
                >
                Create Account

                </button>

            </div>
        </div>
    );
}

export default Register;