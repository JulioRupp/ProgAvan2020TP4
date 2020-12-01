import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

import Header from '../components/ui/Header/Header';
import FilmView from '../components/FilmView/FilmView';
import Home from '../components/Home/Home'
import Error404 from '../components/Error404/Error404';


const AppRouter = () =>{
    return(
      <Router>
            <Header/>
            <Switch>
                <Route exact path="/error404" component={Error404} />
                <Route exact path="/:id" component={FilmView} />
                <Route path="/" component={Home} />
            </Switch>
      </Router> //Router se utiliza para hacer un enrutamiento dinámico, se usa más que nada en desarrollo de SPA
    )
}

export default AppRouter;
