import React, { useState ,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";

import Productlist from './Productlist'
import Navlist from './Navlist'
import Cardlist from './Cardlist'
import Allproducts from './Allproducts'
import Addproducts from './Addproducts'
function Home() {
  const [cards, setCards] = useState([]);
  const navigate=useNavigate()


  const clicking = (ele) => {
    const index = cards.findIndex((item) => item.id === ele.id);
    if (index !== -1) {
      // If item already exists in array, increase its quantity
      const updatedCards = [...cards];
      // updatedCards[index].Quantity += 1;
      setCards(updatedCards);
     
    } else {
      // If item does not exist in array, add it with quantity of 1
      setCards([...cards, { ...ele, Quantity: 1 }]);
     
    }
  };
  
  

const handlechange=(dta,x)=>{
  const i=cards.indexOf(dta);
  const arr=cards;
  // arr[i].Quantity+=x;
  if (arr[i].Quantity == 0) {
    arr[i].Quantity = 1; // set the minimum quantity to 1
    alert('Quantity cannot be less than 1'); // display an alert message
  } else if (arr[i].Quantity >10) {
    arr[i].Quantity = 10; // set the maximum quantity to 10
    alert('Quantity cannot be more than 10'); // display an alert message
  }
  setCards([...cards])
 
   }
  // console.log('card');
  return (
    <>
         <Navlist length={cards.length}/>
      <Routes>
       
    <Route path=":pro" element={ <Productlist clicking={clicking}/>}/>
    <Route path="/card" element={ <Cardlist setCards={setCards} cards={cards} handlechange={handlechange}/>}/>
    <Route path="/" element={ <Allproducts clicking={clicking}/>}/>
    <Route path="/add" element={ <Addproducts/>}/>
     </Routes>
    </>
  );
}
export default Home;