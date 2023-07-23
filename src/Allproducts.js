import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {Row,   Container} from 'react-bootstrap';
import Ratingicon from './Ratingicon';
import Percentage from './Percentage'
function Allproducts({clicking}){
  const [data,setData]=useState([])
 
  useEffect(()=>{
    fetch(`https://63de1e7cf1af41051b0dc6a3.mockapi.io/Data/Api`)
    .then((resp)=>resp.json())
    .then((res)=>setData(res))
  },[])
  const Delete=(id)=>{
    if(window.confirm("Do You Want To Remove The Product?")){
      fetch(`https://63de1e7cf1af41051b0dc6a3.mockapi.io/Data/Api/${id}`,{
      method:"DELETE",

     
    })
    
    
    .then((res)=>{
      alert("Product removed successfully")
      getrecord()
      window.location.reload()
    })
    .catch((error)=>{
      console.log(error)
    })
  }
}
  return(
    <>


<center>
      <Row xs={12}>
         {
      data.map((ele,i)=>{
        return(
          <>
      <Col xs={12} lg={4} xl={4} className=" col-xs-12 col-cards  mt-4">
          <Card key={i}  className="cards" className="mb-2">
        <center>  <Card.Title>{ele.title}</Card.Title></center>
        <center>  <Card.Img variant="top" style={{ 
                           width: '15rem',
                            height: '15rem',
                            margin: '15px',}} 
                        src={ele.image}
            /> </center> 
            <Card.Body>
                 
            <h3>Reviews:</h3>
            <h4 >{ele.rating}<br/></h4><br/>
          <center>  <h3><Ratingicon r={ele.rating}/></h3></center>
              <Card.Text>
              <Card.Text>
              <p>Original Price:₹{ele.orprice}</p>
              <p>Offered Price:₹<del>{ele.ofprice}</del></p>
              <Percentage or={ele.orprice} of={ele.ofprice}/>
              </Card.Text>
              </Card.Text>
              <Button variant="primary"  onClick={()=>clicking(ele)}>Add To Card</Button>&nbsp;&nbsp;&nbsp;&nbsp;
              <Button as="input"  type="button" value="Delete" 
          onClick={()=>Delete(ele.id)} />
            </Card.Body>
        
          </Card>
        </Col>
      </>
        )
      })
    }
   
    </Row>
    </center>


    
    </>
  )
}
export default Allproducts