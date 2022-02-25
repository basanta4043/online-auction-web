import React from 'react';
import logo from '../media/logo.png';
import {useNavigate} from 'react-router-dom'


function LandingPage () {
    const navigate = useNavigate()
    return (
        <header className="App-header">
        <img src={logo} height='15%' width='15%' id='image'></img>
        <p>
         Hey Welcome to Online auction Systems
        </p>
        <p>
        Lots of product are waiting for your bid 
        </p>
        <div id='parent'>
      <button className='button' onClick={()=>{
          navigate('/login')
      }}>Login</button><button className ='button'>Signup</button>
      </div>
      </header>
    )
}

export default LandingPage;