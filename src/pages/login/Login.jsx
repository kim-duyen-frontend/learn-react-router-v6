import { useState } from 'react';
import { useSigninUserMutation } from "../../store/api/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/state/authSlice";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { useEffect } from 'react';

const Login = () => {
    const [formData, setFormData] = useState({
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    });
    const [signinUser, { data, isSuccess }] = useSigninUserMutation();
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleChangeField = (event, type) => {
        const value = event.target.value;
        formData[type] = value;
        setFormData({ ...formData })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        signinUser({ ...formData })
        // console.log({ ...formData });
    }
    useEffect(() => {
        function moveDataSuccess() {
            if (isSuccess) {
                dispatch(setUser({ email: formData.email, token: data.token }));
                navigate("/home");
                localStorage.setItem("token", data.token);
            }
        }
        moveDataSuccess();
    }, [])

    // console.log("receive data of api: ", data);
    return (
        <div className="login">
            <div className="container">
                <div className="form-group">
                    <form onSubmit={handleSubmit}>
                        <label className="labelName">Email: </label>
                        <input
                            className="inputName"
                            value={formData.email}
                            placeholder="enter email..."
                            type="email"
                            onChange={(event) => handleChangeField(event, "email")}
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