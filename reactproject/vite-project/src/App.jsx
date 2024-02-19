import { useState } from 'react'
import Final from './components/Final'
import { BrowserRouter as Router,Route,Routes,Link,useParams } from 'react-router-dom'
import Adduser from './components/Adduser'
// import LandRouting from './components/LandRouting'
// import Land_nav from './components/Land_nav'
// import Land_footer from './components/Land_footer'
import Login from './components/Login'



function App() {
  

  return (
    // <>
    // {/* <Land_nav />
    // <Login />
    // <Land_footer />
    // <LandRouting /> */}
    // <Final/>
    
    // </>
    <Router>
      <div>
        <Routes>
          <Route path='/' exact element ={<Final/>} />
          <Route path="/login" exact element ={<Login/>} />
          <Route path='/Adduser'exact element={<Adduser/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
