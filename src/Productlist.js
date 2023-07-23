import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Percentage from './Percentage'
import {Row,   Container} from 'react-bootstrap';
import Ratingicon from './Ratingicon'
function Productlist({clicking}){
  const [data,setData]=useState([])
 const {pro}=useParams()
  useEffect(()=>{
    fetch(`https://63de1e7cf1af41051b0dc6a3.mockapi.io/Data/Api/?catagory=${pro}`)
    .then((resp)=>resp.json())
    .then((res)=>setData(res))
  },[])
  return(
    <>
   <Container>
      <Row >
         {
      data.map((ele,i)=>{
        return(
          <>
       <Col sm={12}  xs={12} lg={4} xl={3} md={9} className="m-3"className="m-3">
          <Card key={i} style={{width:" 20rem",height:"40rem"}}  className="cards">
        <center>  <Card.Title>{ele.title}</Card.Title></center>
            <Card.Img variant="top" src={ele.image}
             style={{width:"100%",height:"auto"}}
            />
            <Card.Body>
              <h3>Reviews:</h3>
            <h4 >{ele.rating}<span><Ratingicon r={ele.rating}/></span></h4>
              <Card.Text>
              <p>Original Price:₹{ele.orprice}</p>
              <p>Offered Price:₹<del>{ele.ofprice}</del></p>
              <Percentage or={ele.orprice} of={ele.ofprice}/>
              </Card.Text>
              <Button variant="primary"  onClick={()=>clicking(ele)}>Add To Cart</Button>
             
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
export default Productlist