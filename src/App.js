import React, { useState } from 'react';

import Home from './Home';


import {  Route, Routes } from 'react-router-dom'
export default function App() {
 
  return (
    <div>
      
      <>
        <Routes>
         
          <Route path="/*" element={<Home />} />
        </Routes>
        
      </>
    </div>
  );
}
