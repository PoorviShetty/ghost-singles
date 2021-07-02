import React from 'react';
import {
  Link
} from "react-router-dom";

export default function Join() {

  return (
    <div className='main'>
        <form name="join">
        <h1>Join Today!</h1> 
        There's no time like the present to start looking for your soulmate!* 
        <br/><br/>
        <strong>First name: &nbsp;&nbsp;&nbsp;</strong>
        <input name="firstname" id="firstname" type="text" /> 
        <br/><br/>

        <strong>Last name: &nbsp;&nbsp;&nbsp;</strong>
        <input name="lastname" id="lastname" type="text" />
        {/* <div id="dumbnamelink" ></div>  */}
        <br/><br/>
        
        <strong>Desired Username: &nbsp;&nbsp;&nbsp;</strong>
        <input name="username" type="text" />
        <br/><br/>
        
        <strong>Gender: &nbsp;&nbsp;&nbsp;</strong>
        <input name="gender" value="1" id="gendermen" type="radio" /> Male
        <input name="gender" value="2" id="genderwomen" type="radio"/> Female 
        <br/><br/>
        
        <strong>Marital Status: &nbsp;&nbsp;&nbsp;</strong>
        <select name="marital_status">
          <option value="1" selected="">Never married</option>
          <option value="2">Married til death did us part</option>
          <option value="1">Married, then divorced, then died</option>
          <option value="1">Married, then widowed, then died</option>
          <option value="1">Been so long I can't remember</option>
          <option value="1">BOOOOoooooOOOOOOOOOooo</option>
        </select>
        <br /> <br/>
        <strong>Height (standing): &nbsp;&nbsp;&nbsp;</strong>
        <select name="heightfeet" defaultValue={'5'}>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
        </select>
        <select name="heightinches" defaultValue={'5'}>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
        </select>
        <br /> <br/>
        <strong>Height (floating): &nbsp;&nbsp;&nbsp;</strong>
        <select name="heightfeet">
          <option>3</option>
          <option>4</option>
          <option selected="selected">5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
        </select>
        <select name="heightinches">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option selected="selected">6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
        </select>
        <br /> <br/>
        
        
        
        <strong>Build: &nbsp;&nbsp;&nbsp;</strong>
        <select name="build" id="build">
          <option selected="">Wispy</option>
          <option>Airy</option>
          <option>Ethereal</option>
          <option>Smoky</option>
          <option>Cloudy</option>
          <option value="f">Fleshy, actually</option>
        </select> 
        <br/><br/>

        <strong>Referred by: &nbsp;&nbsp;&nbsp;</strong>
        <select name="referrer">
          <option selected="selected">-Please choose one-</option>
          <option>Friend</option>
          <option>Seance</option>
          <option>Medium</option>
          <option>My restless spirit wandered here by chance, or perhaps fate</option> 
        </select>
        <br/><br/>
      
          <strong>Birthdate: &nbsp;&nbsp;&nbsp;</strong>
          <select name="birthmonth">
            <option selected="selected" value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select name="birthday">
            <option selected="selected">1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
          </select>
          <select name="birthyear">
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>1963</option>
            <option>1962</option>
            <option>1961</option>
            <option>1951</option>
            <option>1950</option>
            <option>1897</option>
            <option>1896</option>
            <option>1895</option>
            <option>1894</option>
            <option>1893</option>
            <option>1789</option>
            <option>1788</option>
            <option>1000</option>
          </select> 
          <br/><br/>
          
          <strong>Deathdate: &nbsp;&nbsp;&nbsp;</strong>
          <select name="deathmonth">
            <option selected="selected" value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select name="deathday">
            <option selected="selected">1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
          </select>
          <select name="deathyear">
            <option>2021</option>
            <option>1001</option>
            <option>1000</option>
          </select> 
          <br/><br/>

          <strong>Email: &nbsp;&nbsp;&nbsp;</strong>
          <input name="email" value="" type="text" />
          <br/><br/>

          <strong>Password: &nbsp;&nbsp;&nbsp;</strong>
          <input name="password" value="" type="password" /> 
          <br/><br/>

          <strong>Password (confirm): &nbsp;&nbsp;&nbsp;</strong>
          <input name="password2" value="" type="password" /> 
          <br/><br/>
          
          <strong>I have read and agree to abide by the <Link to="/terms">Terms of Use</Link></strong>
          <br/><br/>

          <input name="tu" type="checkbox" /> <strong>
              And sign me up for <span id="realsite"><em>no-girlfriend.com</em></span> when it launches. Why not?
          </strong>
          <input name="rs" type="checkbox" value="true" checked="checked" />
          <br/><br/>
          <input type="button" value="Submit"/>
          <br />
          <br /> *Actually, the past would probably have been a better time to find your soulmate. 
        </form>
    </div>
  );
}