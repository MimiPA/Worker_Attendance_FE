import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/glints.png';
//import './App.css';
//import '../css/login.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './login.component';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { menu: false };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ menu: !this.state.menu });
    }

    render() {
        const show = (this.state.menu) ? "show" : "";
        return (
            <Router>
                <div className="App">
                    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                        <div className="container">
                            <Link className="navbar-brand" to={"/"}><img src={logo} /></Link>

                            <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={"collapse navbar-collapse " + show}>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/login"}>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/register"}>Register</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Switch>
                        {/* <Route exact path='/' component={Home} /> */}
                        <Route path='/login' component={Login} />
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default Navbar;
