import React from 'react';
import { Header } from '../header/Header';
import { Aside } from '../aside/Aside';
import { Content } from '../content/Content';
import { Footer } from '../footer/Footer';
import { Outlet } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div className="container-scroller">
      <Aside />
      <div className="container-fluid page-body-wrapper">
        <Header />
        <div className="main-panel">
          {/* <Content /> */}
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};
