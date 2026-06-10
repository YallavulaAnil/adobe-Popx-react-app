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
                    Lorem Ipsum Dolor Sit Amet,
                    Consetetur Sadipscing Elitr,
                    Sed Diam Nonumy Eirmod Tempor.
                </p>
            </div>
        </div>
    );
}

export default Account;