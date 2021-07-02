import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";



export default function Join() {



  let [account, setAccount] = useState({
    firstname: '',
    lastname: '',
    username: '',
    gender: 'Female',
    seeking: ['Female'],
    maritalstatus: '1',
    heightfeet: '',
    heightinches: '',
    widthfeet: '',
    widthinches: '',
    build: 'wispy',
    referrer: 'friend',
    birthday: '',
    deathday: '',
    death:'horribly',
    about: '',
    email: '',
    password: '',
    password2: '',
    tu: 'on'
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    account[name] = value;
    setAccount(account);
  }

  let handleArrChange = (e) => {
    let name = e.target.name;
    let value = Array.from(e.target.selectedOptions, option => option.value);
    account[name] = value;
    setAccount(account);
  }

  let onSubmit = (e) => {
    e.preventDefault();
    console.log(account);
  }


  return (
    <div className='main'>

        <form name="join" method="post" onSubmit={onSubmit}>
          <h1>Join Today!</h1> 
          There's no time like the present to start looking for your soulmate!* 
          <br/><br/>
          <strong>First name: &nbsp;&nbsp;&nbsp;</strong>
          <input name="firstname" id="firstname" type="text" onChange={handleChange} defaultValue={account.firstname}/> 
          <br/><br/>

          <strong>Last name: &nbsp;&nbsp;&nbsp;</strong>
          <input name="lastname" id="lastname" type="text" onChange={handleChange} />
          <div id="dumbnamelink" ></div>
          <br/>
          
          <strong>Desired Username: &nbsp;&nbsp;&nbsp;</strong>
          <input name="username" type="text" onChange={handleChange} />
          <br/><br/>
          
          <strong>Gender: &nbsp;&nbsp;&nbsp;</strong>
          <select name="gender" defaultValue={'Female'} onChange={handleChange}>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Transgender">Transgender</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Intersex">Intersex</option>
              <option value="Not specified">Prefer not to say</option>
          </select>
          <br/><br/>

          <strong>Seeking:<br/> &nbsp;&nbsp;&nbsp;</strong>
          <select name="seeking" defaultValue={['Female']} onChange={handleArrChange} multiple>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Transgender">Transgender</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Intersex">Intersex</option>
              <option value="Not specified">Prefer not to say</option>
          </select>
          <br/><br/>
          
          <strong>Marital Status: &nbsp;&nbsp;&nbsp;</strong>
          <select name="maritalstatus" defaultValue={'1'} onChange={handleChange}>
            <option value="1">Never married</option>
            <option value="2">Married til death did us part</option>
            <option value="3">Married, then divorced, then died</option>
            <option value="4">Married, then widowed, then died</option>
            <option value="5">Been so long I can't remember</option>
            <option value="6">BOOOOoooooOOOOOOOOOooo</option>
          </select>
          <br /> <br/>
          <strong>Height (standing): &nbsp;&nbsp;&nbsp;</strong>
          <input name="heightfeet" type="number" onChange={handleChange} />&nbsp;&nbsp; feet&nbsp;&nbsp;
          <input name="heightinches" type="number" onChange={handleChange}/> &nbsp;&nbsp;inches
          <br /> <br/>
          <strong>Height (floating): &nbsp;&nbsp;&nbsp;</strong>
          <input name="widthfeet" type="number" onChange={handleChange}/>&nbsp;&nbsp; feet&nbsp;&nbsp;
          <input name="widthinches" type="number" onChange={handleChange}/> &nbsp;&nbsp;inches
          <br /> <br/>
           
          
          <strong>Build: &nbsp;&nbsp;&nbsp;</strong>
          <select name="build" id="build" defaultValue={"wispy"} onChange={handleChange}>
            <option value="wispy">Wispy</option>
            <option value="airy">Airy</option>
            <option value="ethereal">Ethereal</option>
            <option value="smoky">Smoky</option>
            <option value="cloudy">Cloudy</option>
            <option value="fleshy">Fleshy, actually</option>
          </select> 
          <br/><br/>

          <strong>Referred by: &nbsp;&nbsp;&nbsp;</strong>
          <select name="referrer" defaultValue={"friend"} onChange={handleChange}>
            <option value="friend">Friend</option>
            <option value="seance">Seance</option>
            <option value="medium">Medium</option>
            <option value="fate">My restless spirit wandered here by chance, or perhaps fate</option> 
          </select>
          <br/><br/>
        
          <strong>Birthdate: &nbsp;&nbsp;&nbsp;</strong>
          <input type="date" name="birthday" onChange={handleChange}/>
          <br/><br/>
            
          <strong>Deathdate: &nbsp;&nbsp;&nbsp;</strong>
          <input type="date" name="deathday" onChange={handleChange}/>      
          <br/><br/>

          <strong>Nature of death: &nbsp;&nbsp;&nbsp;</strong>
          <select name="death" defaultValue={'horribly'} onChange={handleChange}>
              <option value="horribly">Horribly
              </option>
              <option value="mysteriously">Mysteriously
              </option>
              <option value="tragically">Tragically
              </option>
              <option value="suddenly">Suddenly</option>
          </select>
          <br/><br/>

          <strong>About: &nbsp;&nbsp;&nbsp;</strong><br/>
          <textarea name="about" rows="4" cols="50">
          </textarea> 
          <br/><br/>

          <strong>Email: &nbsp;&nbsp;&nbsp;</strong>
          <input name="email" value="" type="email" onChange={handleChange}/>
          <br/><br/>

          <strong>Password: &nbsp;&nbsp;&nbsp;</strong>
          <input name="password" value="" type="password" onChange={handleChange}/> 
          <br/><br/>

          <strong>Password (confirm): &nbsp;&nbsp;&nbsp;</strong>
          <input name="password2" value="" type="password" onChange={handleChange}/> 
          <br/><br/>
          
          <strong>I have read and agree to abide by the <Link to="/terms">Terms of Use</Link></strong>
          <input name="tu" type="checkbox" defaultChecked={'on'} onChange={handleChange}/> 

          <br/><br/>
          <button type="submit">JOIN NOW!</button>
          <br />
          <br /> *Actually, the past would probably have been a better time to find your soulmate. 
        </form>
    </div>
  );
}