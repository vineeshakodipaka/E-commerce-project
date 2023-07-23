import React,{useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {Row ,Container} from 'react-bootstrap';
import Percentage from './Percentage'
function Cardlist({cards,handlechange}){
  // console.log(cards)
 
  return(
    <>
      <Container>
<Row >
      
{
      cards.map((ele,i)=>{
     
        return(
          <>
  <Col sm={12}  xs={12} lg={4} xl={3} md={9} className="m-3">
          <Card  style={{width:" 20rem",height:"33rem"}} >
            <Card.Img variant="top" src={ele.image}  style={{width:"100%",height:"auto"}}/>
            <Card.Body>
              <Card.Title>{ele.title}</Card.Title>
              <Card.Text>
              <p>Original Price:₹{ele.orprice}</p>
              <p>Offered Price:₹<del>{ele.ofprice}</del></p>
              <Percentage or={ele.orprice} of={ele.ofprice}/>
              </Card.Text>
              <Button variant="primary"  onClick={()=> handlechange(ele,1)}>+</Button>
              {ele.Quantity}
              <Button variant="primary"   onClick={()=> handlechange(ele,-1)}>-</Button>
            </Card.Body>
          </Card>
        </Col>
    
   


          </>
        )
      })
    }
     <h3>
      Total Price:
      ₹{cards.map((el)=>el.orprice*el.Quantity).reduce((total,value)=>total+value,0)}
    </h3>

     </Row>
    
     </Container>
    
    </>
  )
}
export default Cardlist