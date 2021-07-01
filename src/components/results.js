import React, {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function Result() {
    

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

    console.log(data)

    return (

            <div className='main'>
                <Grid container className='mainGrid'>                    
                        
                    {
                        data 
                        && data.length>0 
                        && data.map((item)=>
                            <Grid item xs={12} sm={6} md={4} className="personCardItem">
                                <Paper elevation={5} className="personCard" key={data.key}>
                                    <img src={item.picture} alt={item.name} />
                                    {item.name}
                                </Paper>
                            </Grid>)
                    }
                    
                </Grid>
            </div>

    );
}