import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Hidden from '@material-ui/core/Hidden';

import Contact from "./contact";
import Prices from "./prices";
import Tips from "./tips";
import Terms from "./terms";
import Privacy from "./privacy";
import Join from "./join";
import Result from "./results";
import Profile from "./profile";


export default function Page() {

    return (
      <div className='mainPage'>
         <Grid container className='mainPageGrid'>
            <Grid item xs={12} sm={9} md={8} >
                <div>              
                    <Switch>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/prices">
                            <Prices />
                        </Route>
                        <Route path="/tips">
                            <Tips />
                        </Route>
                        <Route path="/privacy">
                            <Privacy />
                        </Route>
                        <Route path="/terms">
                            <Terms />
                        </Route>
                        <Route path="/join">
                            <Join />
                        </Route>
                        <Route path="/result">
                            <Result />
                        </Route>
                        <Route path="/profile/:key" children={<Profile />} />                        
                    </Switch>
                </div>
            </Grid>
            <Hidden only='xs'>
                <Grid item sm={3} md={4}>
                    <Link to="/tips">
                        <div className="tipsImage"> 
                            <img src="./assets/dating_tips.jpg" alt="dating tips"/>            
                        </div>
                    </Link>
                </Grid>
            </Hidden>
        </Grid>
  
      </div>
    );
  }
  