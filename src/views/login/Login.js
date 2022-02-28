import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

    let navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/dashboard')
    }

    return (
        <>
            <div className="color-line"></div>
            {/*<div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="back-link back-backend">
                            <a href="index.html" className="btn btn-primary">Back to Dashboard</a>
                        </div>
                    </div>
                </div>
            </div>*/}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12"></div>
                    <div className="col-md-4 col-md-4 col-sm-4 col-xs-12">
                        <div className="text-center m-b-md custom-login">
                            <h3>PLEASE LOGIN TO APP</h3>
                            <p>---------------------------</p>
                        </div>
                        <div className="hpanel">
                            <div className="panel-body">
                                <form action="#" id="loginForm">
                                    <div className="form-group">
                                        <label className="control-label">Usuario</label>
                                        <input type="text" placeholder="example@gmail.com" title="Please enter you username" required=""  name="username" id="username" className="form-control"/>
                                            {/*<span className="help-block small">Your unique username to app</span>*/}
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Constraseña</label>
                                        <input type="password" title="Please enter your password" placeholder="******" required="" name="password" id="password" className="form-control"/>
                                            {/*<span className="help-block small">Yur strong password</span>*/}
                                    </div>
                                    <div className="checkbox login-checkbox">
                                        <label>
                                            <input type="checkbox" className="i-checks"/> 
                                            Recuerdame 
                                        </label>
                                        {/*<p className="help-block small">(if this is a private computer)</p>*/}
                                    </div>
                                    <button 
                                        className="btn btn-success btn-block loginbtn"
                                        onClick={ handleLogin }
                                        >Login
                                    </button>
                                    {/*<a className="btn btn-default btn-block" href="#">Registrar</a>*/}
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12"></div>
                </div>
                {/*<div className="row">
                    <div className="col-md-12 col-md-12 col-sm-12 col-xs-12 text-center">
                        <p>Copyright © 2018 <a href="https://colorlib.com/wp/templates/">Colorlib</a> All rights reserved.</p>
                    </div>
                </div>*/}
            </div>
        </>
    )
}
