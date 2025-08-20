
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { selectors } from './store/actionCreators';
import { connect } from 'react-redux';
import AppRoutes from './utilities/routes/AppRoutes';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App({ permit }) {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes permit={permit} />
      </BrowserRouter>
    </div>
  );
}


const mapStateToProps = state => ({
  permit: selectors?.getPermit(state)
})
export default connect(mapStateToProps, null)(App)

