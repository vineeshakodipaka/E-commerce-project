import React from 'react'
import {Link} from 'react-router-dom'
import {Container,NavLink,Nav,Navbar} from 'react-bootstrap';
const Data=["Mobile","Laptop"]
function Navlist({length}){
  
  return(
    <>
 
   
   
    <Navbar  style={{background:"rgb(244 51 151)"}} expand="lg" className="navbar p-3">
   
        <Navbar.Brand href="#home" className="brand" style={{color:"pink",fontFamily: "Sofia"}}>
         Amazon
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto" >
           {
             Data.map((ele,i)=>{
               return(
                 <>
                 <NavLink key={i} to={ele}>
                   <Link to={ele} style={{textDecoration:"none",color:"white"}}>
                   <div className="list_item">{ele}</div>
                   </Link>
                 </NavLink>
                 </>
               )
             })
           }
           
       <NavLink >
       <Link to="/" style={{textDecoration:"none",color:"white"}}>
          Allproducts
            </Link> &nbsp; 
             <Link to="/add" style={{textDecoration:"none",color:"white"}}>
             Add Products
            </Link> &nbsp; 
            <Link to="/card"  style={{textDecoration:"none",color:"white"}}>
            <i className="fas fa-shopping-cart cart" style={{color:"white"}} />-<sup>{length}</sup>
            
            </Link> 
            {/* <Link to="/" style={{textDecoration:"none",color:"white"}}>
            Logout
            </Link> &nbsp;  */}
           
     </NavLink><br/><br/>
          </Nav>

        </Navbar.Collapse>
  
    </Navbar>

    </>
  )
}
export default Navlist