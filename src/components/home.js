
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Search from "./search";

export default function Home() {

  return (
    <div className='main'>
        <Grid container className='mainPageGrid'>
            <Grid item xs={12} sm={4} md={4} >
              <div className="searchCol">
                <Search />
                <div className="ladyImage"> 
                    <img src="./assets/success.jpg" alt="testimonial"/>            
                </div>
              </div>
            </Grid>  
            <Grid item xs={12} sm={8} md={8}>
                
                <div className="ladyImage"> 
                    <img src="./assets/ghost-lady.JPG" alt="ghost lady in chair"/>            
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <div className="homeText"> 
                  <h1>Free Singles, Free Chat, Free Souls</h1>

                  Finally, a dating site for singles who know how to get a life! Well, an afterlife. Okay, maybe some sort of in-between, nether-world, ethereal existence. But if you're looking for love, and you're dead, Ghost Singles is the site for you. Dozens* of singles have already joined, and the singles' chat is available 24/7 for your enjoyment. This is a free dating site, if you qualify, so don't hesitate! Join today!<br/><br/>

                  Please note: no marriages have ever materialized from Ghost Singles. Relationships, sure, but seriously, have you ever tried getting a priest to solemnify your unholy union? So don't bank on finding your spouse - just your match for eternity. Chat, date, and have fun with other post-life singles. <br/><br/>

                  Also, we don't accept the undead or living dead - no zombies or vampires!<br/><br/>

                  Final note: if you're mortal, this isn't the dating site for you. No offense. Upon request, we can recommend some online singles sites for the living.

                  <br/><br/><br/><br/>

                  <br/><br/>*Precisely one dozen         

                </div>
            </Grid>
        </Grid>
    </div>
  );
}
