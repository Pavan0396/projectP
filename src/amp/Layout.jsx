import React, { useState } from 'react';
import { Link, BrowserRouter as Router, useLocation } from 'react-router-dom';
import './Layout.css';
import MainRoutes from '../utilities/routes/MainRoutes';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const breadcrumbMap = {
  '': 'Home',
  general: 'General',
  technical: 'Technical',
  general: 'General',
  notifications: 'Notifications'
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <div className="breadcrumbs">
      <Link to="/">Home</Link>
      {pathnames.map((key, index) => {
        const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
        const isLast = index === pathnames.length - 1;
        const label = breadcrumbMap[key] || key;

        return (
          <span key={routeTo}>
            {' > '}
            {isLast ? (
              <span>{label}</span>
            ) : (
              <Link to={routeTo}>{label}</Link>
            )}
          </span>
        );
      })}
    </div>
  );
};


const Layout = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div style={{ display: "flex" }}>
        <Sidebar collapsed={collapsed} toggle={() => setCollapsed(!collapsed)} />
        <div style={{ flex: 1 }}>
                  <Header main={true}/>
          <MainRoutes />
        </div>
      </div>
    );
};

export default Layout;
