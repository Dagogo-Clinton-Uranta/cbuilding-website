import React,{useEffect, useState} from 'react';



import Homepage from "./pages/Homepage.js";
import Item1 from "./pages/Item1/Item1.js";
import Item2 from "./pages/Item2/Item2.js";
import Item3 from "./pages/Item3/Item3.js";
import Item4 from "./pages/Item4/Item4.js";
import Item5 from "./pages/Item5/Item5.js";
import Item6 from "./pages/Item6/Item6.js";
import Item7 from "./pages/Item7/Item7.js";
import Item8 from "./pages/Item8/Item8.js";
import Item9 from "./pages/Item9/Item9.js";
import Item10 from "./pages/Item10/Item10.js";
import Item11 from "./pages/Item11/Item11.js";
import Item12 from "./pages/Item12/Item12.js";


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {

  

   
  return (
     <>
     
     <Router> 
         <Routes>
           <Route  path="/" exact element={<Homepage/>} />
           <Route  path="/portfolio1" exact element={<Item1/>} />
           <Route  path="/portfolio2" exact element={<Item2/>} />
           <Route  path="/portfolio3" exact element={<Item3/>} />
           <Route  path="/portfolio4" exact element={<Item4/>} />
           <Route  path="/portfolio5" exact element={<Item5/>} />
           <Route  path="/portfolio6" exact element={<Item6/>} />
           <Route  path="/portfolio7" exact element={<Item7/>} />
           <Route  path="/portfolio8" exact element={<Item8/>} />
           <Route  path="/portfolio9" exact element={<Item9/>} />
           <Route  path="/portfolio10" exact element={<Item10/>} />
           <Route  path="/portfolio11" exact element={<Item11/>} />
           <Route  path="/portfolio12" exact element={<Item12/>} />
           
         </Routes>
      </Router> 
     

    </>
  );
}

export default App;