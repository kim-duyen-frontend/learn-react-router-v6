import { useState } from 'react';
import "./login.scss";

function Login() {
    const [formData, setFormData] = useState({
        name: "",
        password: ""
    });

    const handleChangeField = (event, type) => {
        const value = event.target.value;
        formData[type] = value;
        setFormData({ ...formData })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ ...formData });
    }
    return (
        <div className="login">
            <div className="container">
                <div className="form-group">
                    <form onSubmit={handleSubmit}>
                        <label className="labelName">Username: </label>
                        <input
                            className="inputName"
                            value={formData.name}
                            placeholder="enter name..."
                            type="text"
                            onChange={(event) => handleChangeField(event, "name")}
                        />
                        <label className="labelPassword">Password: </label>
                        <input
                            className="inputPassword"
                            value={formData.password}
                            placeholder="enter password..."
                            type="password"
                            onChange={(event) => handleChangeField(event, "password")}
                        />
                        <button className="btnLogin">log in</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;