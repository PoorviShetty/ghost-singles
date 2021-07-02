import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";

//Does basically nothing :D

export default function Join() {

  var error = false;

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
    about: 'Write something!',
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
    error = false;
    checkEmpty();
    checkDate();
    checkPass();
    if (!error){
      console.log(account);
      window.location.href = 'https://youtu.be/9Deg7VrpHbM';
    }    
  }

  //Dumb Name
  let dumbName = () =>{
    var firstname = document.getElementById('firstname').value.replace(/[^a-zA-Z0-9]+/,'');
    var lastname = document.getElementById('lastname').value.replace(/[^a-zA-Z0-9]+/,'');
    if ((firstname != '') && (lastname != '')){
      var link = 'http://'+firstname+'.'+lastname+'.isadumb.name';
      document.getElementById('dumbnamelink').innerHTML = "Huh. There's a website that says <b>"+firstname+" "+lastname+"</b> is a dumb name: <a href='"+link+"' target=_blank>"+link+"</a>";
    }	
  }

  //Check Build
  let checkBuild = () =>{
    if (document.getElementById('build').value=='fleshy') alert("Ghosts only please! No living, or tangible undead such as vampires or zombies.");
  }
  
  //Check if birthday less than death day
  let checkDate = () =>{
    const date1 = new Date(account.birthday);
    const date2 = new Date(account.deathday);
    const diffTime = date2 - date1;
    if (diffTime < 0){
      alert("Very interesting")
      error = true;
    }
  }

  //Check if passwords are equal
  let checkPass = () =>{
    var password = document.getElementById('password').value
    var password2 = document.getElementById('password2').value
    if(password != password2){
      alert("Passwords don't match")
      error = true;
    }
  }

  //Check if fields are empty
  let checkEmpty = () =>{
    if(Object.values(account).includes("")){
      alert("Don't be shy, fill all the fields!")
      error = true;
    }
  }

  return (
    <div className='main'>

        <form name="join" method="post" onSubmit={onSubmit}>
          <h1>Join Today!</h1> 
          There's no time like the present to start looking for your soulmate!* 
          <br/><br/>
          <strong>First name: &nbsp;&nbsp;&nbsp;</strong>
          <input name="firstname" id="firstname" type="text" onChange={handleChange} defaultValue={account.firstname} onBlur={dumbName}/> 
          <br/><br/>

          <strong>Last name: &nbsp;&nbsp;&nbsp;</strong>
          <input name="lastname" id="lastname" type="text" onChange={handleChange} onBlur={dumbName} />
          <div id="dumbnamelink"></div>
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
          <select name="build" id="build" defaultValue={"wispy"} onChange={handleChange} onBlur={checkBuild}>
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
          <textarea name="about" rows="4" cols="25" defaultValue="Write something!">            
          </textarea> 
          <br/><br/>

          <strong>Email: &nbsp;&nbsp;&nbsp;</strong>
          <input name="email" type="email" onChange={handleChange}/>
          <br/><br/>

          <strong>Password: &nbsp;&nbsp;&nbsp;</strong>
          <input name="password" id="password" type="password" onChange={handleChange}/> 
          <br/><br/>

          <strong>Password (confirm): &nbsp;&nbsp;&nbsp;</strong>
          <input name="password2" id="password2" type="password" onChange={handleChange}/> 
          <br/><br/>
          
          <strong>I have read and agree to abide by the <Link to="/terms">Terms of Use</Link></strong> (You don't really have a choice)
          <input name="tu" type="checkbox" checked="checked" onChange={handleChange}/> 

          <br/><br/>
          <button type="submit">JOIN NOW!</button>
          <br />
          <br /> *Actually, the past would probably have been a better time to find your soulmate. 
        </form>
    </div>
  );
}