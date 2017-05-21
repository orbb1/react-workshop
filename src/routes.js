import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import App from './App';
import {About} from './Components/About/';

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <div className={match ? 'navlink active' : 'navlink'}>
      <Link to={to}>{label}</Link>
    </div>
  )}/>
)

export const Routes = () => {
    return (
        <BrowserRouter>
            <div>
                <div className="navigation">
                    <OldSchoolMenuLink activeOnlyWhenExact={true} to="/home" label="Contact List"/>
                    <OldSchoolMenuLink to="/about" label="About"/>
                </div>
                <br/>
                <Route path="/home" component={App}></Route>
                <Route path="/about" component={About}></Route>
            </div>
        </BrowserRouter>
    )
};