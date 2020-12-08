import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home'
import List from './pages/List'


export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={List} />
    </Switch>
)
