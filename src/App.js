import React, { useState } from 'react'
import {Navbar} from './component/Navbar';
import{Footer} from './component/Footer';
import {Routes} from './component/Routes';

const App = () => {

    const[darkTheme, setDarkTheme] = useState(false);
  return (
  <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-50 min-h-screen"> 

        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Footer />
        <Routes />
       </div>
    
  </div>
  )
}

export default App