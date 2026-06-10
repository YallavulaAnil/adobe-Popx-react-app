function Account() {
    const user = JSON.parse(
        localStorage.getItem("user")
    );

    return(
        <div className="container">
            <div className="card">

                <h2>Account Settings</h2>

                <div className="profile">
                    <img
                        src={
                            user?.image ||
                            "https://via.placeholder.com/100"
                        }
                        alt=""
                        className="avatar"
                    />

                    <div>
                        <h3>{user?.fullName}</h3>
                        <p>{user?.email}</p>
                    </div>
                </div>

                <p className="description">
                   I am a passionate Frontend Developer with strong skills in building responsive,
                   user-friendly, and visually appealing web applications. I specialize in
                    HTML, CSS, JavaScript, and React, and I enjoy turning design ideas into clean,
                     efficient, and interactive interfaces. I focus on creating smooth user experiences
                     with attention to detail, performance, and accessibility.

                </p>
            </div>
        </div>
    );
}

export default Account;