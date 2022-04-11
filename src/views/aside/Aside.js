import React from 'react';
import { Link } from 'react-router-dom';

export const Aside = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
        <a className="sidebar-brand brand-logo" href="index.html">
          <img src="assets/images/logo.svg" alt="logo" />
        </a>
        <a className="sidebar-brand brand-logo-mini" href="index.html">
          <img src="assets/images/logo-mini.svg" alt="logo" />
        </a>
      </div>

      <ul className="nav">
        <li className="nav-item profile">
          <div className="profile-desc">
            <div className="profile-pic">
              <div className="count-indicator">
                <img
                  className="img-xs rounded-circle "
                  src="assets/images/faces/face15.jpg"
                />
                <span className="count bg-success" />
              </div>
              <div className="profile-name">
                <h5 className="mb-0 font-weight-normal">Fernando Tello Gonca</h5>
                <span>Gold Member</span>
              </div>
            </div>
            <a href="#" id="profile-dropdown" data-toggle="dropdown">
              <i className="mdi mdi-dots-vertical" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list"
              aria-labelledby="profile-dropdown">
              <a href="#" className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-settings text-primary" />
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject ellipsis mb-1 text-small">
                    Account settings
                  </p>
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
                  <p className="preview-subject ellipsis mb-1 text-small">
                    Change Password
                  </p>
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
                  <p className="preview-subject ellipsis mb-1 text-small">
                    To-do list
                  </p>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item nav-category">
          <span className="nav-link">Navigation</span>
        </li>
        <Link to="/dashboard" className="nav-item menu-items">
          <a className="nav-link" href="index.html">
            <span className="menu-icon">
              <i className="mdi mdi-speedometer" />
            </span>
            <span className="menu-title">Inicio</span>
          </a>
        </Link>
        <Link to="/cliente" className="nav-item menu-items">
          <a className="nav-link" href="index.html">
            <span className="menu-icon">
              <i className="mdi mdi-speedometer" />
            </span>
            <span className="menu-title">Cliente</span>
          </a>
          <div className="collapse" id="ui-client">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {' '}
                <a className="nav-link" href="pages/ui-features/buttons.html">
                  Buttons
                </a>
              </li>
              <li className="nav-item">
                {' '}
                <a className="nav-link" href="pages/ui-features/dropdowns.html">
                  Dropdowns
                </a>
              </li>
              <li className="nav-item">
                {' '}
                <a
                  className="nav-link"
                  href="pages/ui-features/typography.html">
                  Typography
                </a>
              </li>
            </ul>
          </div>
        </Link>
        <Link to="/vendedor" className="nav-item menu-items">
          <a className="nav-link" href="pages/forms/basic_elements.html">
            <span className="menu-icon">
              <i className="mdi mdi-playlist-play" />
            </span>
            <span className="menu-title">Vendedor</span>
          </a>
        </Link>
        <Link to="/producto" className="nav-item menu-items">
        <li className="nav-item menu-items">
          <a className="nav-link" href="pages/tables/basic-table.html">
            <span className="menu-icon">
              <i className="mdi mdi-table-large" />
            </span>
            <span className="menu-title">Producto</span>
          </a>
        </li>
        </Link>
        <Link to="/categoria" className="nav-item menu-items">
        <li className="nav-item menu-items">
          <a className="nav-link" href="pages/charts/chartjs.html">
            <span className="menu-icon">
              <i className="mdi mdi-chart-bar" />
            </span>
            <span className="menu-title">Categoria</span>
          </a>
        </li>
        </Link>
        <Link to="/Comprobante" className="nav-item menu-items">
        <li className="nav-item menu-items">
          <a className="nav-link" href="pages/icons/mdi.html">
            <span className="menu-icon">
              <i className="mdi mdi-contacts" />
            </span>
            <span className="menu-title">Comprobante</span>
          </a>
        </li>
      </Link>
      </ul>
    </nav>
  );
};
