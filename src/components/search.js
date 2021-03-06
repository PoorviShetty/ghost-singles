import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { Redirect , useHistory } from "react-router-dom";
import querystring from 'querystring';

export default function Search() {

  const history = useHistory();

  let [search, setSearch] = useState({
    seeker: 'Female',
    seeking: ['Female'],
    minage: '100',
    maxage:'1000',
    death:'horribly'
  });
  
  let handleChange = (e) => {
    let name = e.target.name;
    //let value = e.target.value;
    let value = Array.from(e.target.selectedOptions, option => option.value);
    search[name] = value;
    setSearch(search);
  }

  let onSubmit = (e) => {
    e.preventDefault();

    history.push({
        pathname: '/result',
        search: querystring.stringify(search)
      }
    );
    //console.log(querystring.stringify(search));
    }

  return (
    <Paper elevation={10} className="searchOuter">
        <p className="searchTitle">SEARCH NOW</p>
        GhostSingles.com is 100% FREE! Free to browse other singles, free to send messages, everything!
        <br/><br/>So what are you waiting for? Use the form below to start your search!
        <Paper elevation={5} className="searchInner">


        <form method="post" onSubmit={onSubmit}>
          I am a &nbsp;&nbsp;
          <select name="seeker" defaultValue={'Female'} onChange={handleChange}>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Transgender">Transgender</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Intersex">Intersex</option>
              <option value="Not specified">Prefer not to say</option>
          </select> <br/>
          ghost seeking a &nbsp;&nbsp;
          <select name="seeking" defaultValue={['Female']} onChange={handleChange} multiple>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Transgender">Transgender</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Intersex">Intersex</option>
              <option value="Not specified">Prefer not to say</option>
          </select><br/>
          ghost between the ages of <br/>
          <select name="minage" defaultValue={'100'} onChange={handleChange}>
            <option value="100">100</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
          </select>
          &nbsp;&nbsp;and &nbsp;&nbsp;
          <select name="maxage" defaultValue={'1000'} onChange={handleChange}>
            <option value="100">100</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
          </select>
          who died &nbsp;&nbsp;
          <select name="death" defaultValue={'horribly'} onChange={handleChange}>
              <option value="horribly">horribly
              </option>
              <option value="mysteriously">mysteriously
              </option>
              <option value="tragically">tragically
              </option>
              <option value="suddenly">suddenly</option>
          </select><br/><br/>
          <button type="submit">SEARCH!</button>
        </form>
        {search.length > 0 &&
          <Redirect to={{
            pathname: '/results',
            state: { data: search }
          }}/>
          
        }

        </Paper>
    </Paper>


  );
}