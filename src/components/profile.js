import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import {
    useParams,
  } from "react-router-dom";

export default function Profile() {
    const { key } = useParams();

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
        item.key == key
    )


    return (

            <div className='main'>
                {
                    filterdata
                    && filterdata.length>0 
                    && filterdata.map((item)=>
                        <Grid item xs={12} sm={12} md={12} className="personCardItem" key={item.key}>

                            <img src={item.picture} alt={item.firstname}/>
                            <p><strong>Name: </strong>{item.firstname}</p>
                            <p><strong>Age: </strong>{item.age}</p>
                            <p><strong>Gender: </strong>{item.gender} </p>
                            <p><strong>About: </strong>{item.about}</p>
                            <p><strong>Nature of death: </strong>{item.death}</p>

                        </Grid>)
                }
            </div>

    );
}

