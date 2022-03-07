import React from 'react'
import { AsideData } from './../../components/aside/AsideData'


export const Aside = () => {
    return (
        < nav className="sidebar sidebar-offcanvas" id="sidebar" >
            <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                <a className="sidebar-brand brand-logo" href="index.html"><img src="assets/images/logo.svg" alt="logo" /></a>
                <a className="sidebar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
            </div>
            <ul className="nav">
                {/*<li className="nav-item profile">
                    <div className="profile-desc">
                        <div className="profile-pic">
                            <div className="count-indicator">
                                <img className="img-xs rounded-circle " src="assets/images/faces/face15.jpg" />
                                <span className="count bg-success" />
                            </div>
                            <div className="profile-name">
                                <h5 className="mb-0 font-weight-normal">Henry Klein</h5>
                                <span>Gold Member</span>
                            </div>
                        </div>
                        <a href="#" id="profile-dropdown" data-toggle="dropdown"><i className="mdi mdi-dots-vertical" /></a>
                        <div className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
                            <a href="#" className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <i className="mdi mdi-settings text-primary" />
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject ellipsis mb-1 text-small">Account settings</p>
                                </div>
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <i className="mdi mdi-onepassword  text-info" />
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject ellipsis mb-1 text-small">Change Password</p>
                                </div>
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <i className="mdi mdi-calendar-today text-success" />
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject ellipsis mb-1 text-small">To-do list</p>
                                </div>
                            </a>
                        </div>
                    </div>
    </li>*/}
                <li className="nav-item nav-category">
                    <span className="nav-link">Navegacion</span>
                </li>
                {
                    AsideData.map((val, key) => {
                        return (
                        <li className="nav-item menu-items" key={key} onClick={() => {window.location.pathname = val.link}}>
                            <a className="nav-link">
                                <span className="menu-icon">
                                    <i className={val.icon} />
                                </span>
                                <span className="menu-title">{val.title}</span>
                            </a>
                        </li>
                        )
                    })
                }

            </ul>
        </nav >
    )
}
