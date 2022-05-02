import React from 'react';
import  { Routes, Route }  from  "react-router-dom" ; 

import Home from './Home';
import Contact from './Contact';
import About from './About';

function App() {

    return (
        <div>
           <Routes>
                <Route path='/'  element={ <Home />} />
                <Route path='/contato'  element={<Contact />} />
                <Route path='/sobre' element={<About />} />
            
           </Routes>
        </div>
    )
}

export default App;