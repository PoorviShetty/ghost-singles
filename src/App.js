
import './App.css';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/home";
import Page from "./components/temp";


export default function App() {

  return (
    <Router>
      <div className='main'>
        <Grid container className='mainGrid'>
          <Grid item xs={11} sm={11} md={7} >
            <Paper elevation={10} className='mainPaper'>
              <header>
                <div className="headerContent">
                  <Link to="/"><img src="./assets/logo.JPG" alt="logo"/></Link>       
                  <nav className="right"><br className="lineHack"/>
                      Don't Haunt Alone!<br/>
                      <Link to="/">HOME</Link>&nbsp;&nbsp;
                      <Link to="/contact">CONTACT</Link>&nbsp;&nbsp;
                      <Link to="/join">JOIN</Link>
                  </nav>
                </div>
                <hr/>
              </header>

              
                <div className="mainContent">              
                  <Switch>
                    <Route path={["/privacy", "/terms", "/contact", "/prices", "/tips", "/join", '/result', '/profile/:key']}>
                      <Page />
                    </Route>
                    <Route path="/">
                      <Home />
                    </Route>
                  </Switch>
                </div>
                <footer>
                  <nav>
                    <Link to="/privacy">Privacy</Link>&nbsp;&nbsp;
                    <Link to="/terms">T&C</Link>&nbsp;&nbsp;
                    <Link to="/contact">Contact</Link>&nbsp;&nbsp;
                    <Link to="/prices">Prices</Link>&nbsp;&nbsp;
                    <Link to="/tips">Tips</Link>&nbsp;&nbsp;
                    <strong><a href="http://ghostsingles.com/" target="_blank" rel="noreferrer">Original</a></strong>
                  </nav>
                </footer>

              
            </Paper>
          </Grid>
        </Grid>

      </div>
    </Router>
  );
}
