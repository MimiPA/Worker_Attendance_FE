import React from 'react';
import '../css/login.css';

class Login extends React.Component {
    render() {
        return (
            <div className="outer">
                <div className="inner">
                    <div className="container">
                        <form className="mt-5">
                            <h2>Login</h2>

                            <div className="form-group">
                                <label className="label">Email :</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>


                            <button type="submit" className="btn btn-success btn-lg btn-block">Login</button>
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
