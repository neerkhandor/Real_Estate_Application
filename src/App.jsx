import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
  <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/sign-in' element={<SignIn />}/>
      <Route path='/sign-out' element={<SignOut />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/profile' element={<Profile />}/> 
    </Routes>
    </BrowserRouter>

  </>
  )
}
export default App
