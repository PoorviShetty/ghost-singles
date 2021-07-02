import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
    useParams,
    Link
  } from "react-router-dom";

export default function Profile() {
    const { key } = useParams();
    console.log(key) 
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
    console.log(key)
    console.log(filterdata)


    return (

            <div className='main'>
                {
                    filterdata
                    && filterdata.length>0 
                    && filterdata.map((item)=>
                        <Grid item xs={12} sm={12} md={12} className="personCardItem" key={item.key}>

                            <img src={item.picture} alt={item.name}/>
                            <p><strong>Name: </strong>{item.name}</p>
                            <p><strong>Age: </strong>{item.age}</p>
                            <p><strong>Gender: </strong>{item.gender}</p>
                            <p><strong>About: </strong>{item.about}</p>
                            <p><strong>Nature of death: </strong>{item.died}</p>

                        </Grid>)
                }
            </div>

    );
}