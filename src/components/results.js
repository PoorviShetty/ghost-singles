import React, {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

export default function Result() {
    const queryParams = new URLSearchParams(window.location.search);
    // const seeker = queryParams.get('seeker');
    const seeking = queryParams.get('seeking');
    const minage = queryParams.get('minage');
    const maxage = queryParams.get('maxage');
    const death = queryParams.get('death');

    const [data, setData]=useState([]);
    const getData=()=>{
        fetch('../data/ghosts.json',{
                headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
            }
        )
        .then(function(response){
            //console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            //console.log(myJson);
            setData(myJson)
        });
    }
    useEffect(()=>{
        getData()
    },[])

    const filterdata = data.filter(
        item => 
        item.gender === seeking && 
        item.age >= minage &&
        item.age <= maxage &&
        item.died === death
    )

    
    return (

            <div className='main'>
                <Grid container className='mainGrid'>                    
                        
                    {
                        filterdata
                        && filterdata.length>0 
                        && filterdata.map((item)=>
                            <Grid item xs={12} sm={6} md={4} className="personCardItem" key={item.key}>
                                <Link to={"/profile/"+ item.key}>
                                    <Paper elevation={5} className="personCard">
                                        <img src={item.picture} alt={item.name}/>
                                        {item.name}
                                    </Paper>
                                </Link>
                            </Grid>)
                    }
                    
                </Grid>
            </div>

    );
}