import './App.css';

import { Signup } from './Components/Signup/Signup'
import { Profile } from "./Components/Profile/Profile";

import { Context } from './Components/Context/Context';
import {useContext} from 'react'
import { Routes, Route, NavLink } from "react-router-dom";
import { Updateform } from './Components/Profile/Updateform';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='itemlinks'>
          <NavLink className='links' to=''  >profile</NavLink>
          <NavLink className='links' to='/signup' >RegisterUser</NavLink>

        </div>

      </header>
      <Context>
        <Routes>
          <Route path='' element={<Profile />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/additform' element={<Updateform />} />
          <Route path='*' element={<div>page not found</div>} />

        </Routes>
      </Context>


    </div>
  );
}

export default App;
