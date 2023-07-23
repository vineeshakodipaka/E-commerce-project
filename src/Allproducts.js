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

<Container>
      <Row xs={12}>
         {
      data.map((ele,i)=>{
        return(
          <>
       <Col sm={12}  xs={12} lg={4} xl={3} md={9} className="m-3">
          <Card key={i} style={{width:" 20rem",height:"40rem"}}  className="cards" className="mb-2">
        <center>  <Card.Title>{ele.title}</Card.Title></center>
            <Card.Img variant="top" style={{width:"100%",height:"auto"}} src={ele.image}
            />
            <Card.Body>
                 
            <h3>Reviews:</h3>
            <h4 >{ele.rating}<span><Ratingicon r={ele.rating}/></span></h4>
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
    </Container>
    </>
  )
}
export default Allproducts