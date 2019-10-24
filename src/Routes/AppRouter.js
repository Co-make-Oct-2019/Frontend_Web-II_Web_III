import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

// * IMPORTS (COMPONENTS / IMPORTS)

// ? ROUTES
import PrivateRoute from './PrivateRoute';

// ? COMPONENTS
import DashBoard from '../components/DashBoard/DashBoard';
import Issues from '../components/Issues/Issues';
import IssuesForm from '../components/Issues/IssuesForm';
import Login from '../components/User/Login';
import Profile from '../components/Profile/Profile';

// * HISTORY OBJ
const history = createBrowserHistory();

const AppRouter = () => {



    return (
        <Router history={history}>
            <>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/signup" component={Login} />
                    <PrivateRoute path="/new-issue" component={IssuesForm} />
                    <PrivateRoute path="/edit-issue" component={IssuesForm} />
                    <Route path="/issue/:id" component={Issues} />
                    <Route path="/dashboard" component={DashBoard} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/issues" component={Issues} />
                </Switch>
            </>
        </Router>
    )
}

export default AppRouter