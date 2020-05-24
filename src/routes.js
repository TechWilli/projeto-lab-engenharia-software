import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Books from  './screens/Books';

export default function Routes(props) {

    return (
        <Router>
            <Switch>
                {/* <Route path='/' exact component={() => <h1>Home</h1>} /> */}
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/books' component={Books} />
            </Switch>
        </Router>
    );

}