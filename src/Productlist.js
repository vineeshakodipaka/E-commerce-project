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
  

<center>
      <Row className="m-3"   xs={12}  style={{fontSize:"20px"}}>
         {
      data.map((ele,i)=>{
        return(
          <>
      <Col xs={12} lg={4} xl={3} className=" col-xs-12 mt-4  col-cards">
          <Card key={i} className="cards" className="mb-2 p-3">
        <center>  <Card.Title>{ele.title}</Card.Title></center>
        <center>  <Card.Img
        className="card-img"
         variant="top" 
                        src={ele.image}
            /> </center> 
            <Card.Body>
                 
            <h3>Reviews:</h3>
            <h4 >{ele.rating}<br/></h4><br/>
          <center>  <h3><Ratingicon r={ele.rating}/></h3></center>
              <Card.Text>
              <Card.Text>
              <p  style={{fontSize:"20px"}}>Original Price:₹{ele.orprice}</p>
              <p style={{fontSize:"20px"}}>Offered Price:₹<del>{ele.ofprice}</del></p>
              <Percentage or={ele.orprice} of={ele.ofprice}/>
              </Card.Text>
              </Card.Text>
              <Button className="mt-2" variant="primary"  onClick={()=>clicking(ele)}>Add To Card</Button>&nbsp;&nbsp;&nbsp;&nbsp;
              <Button  className="mt-2"  as="input"  type="button" value="Delete" 
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
export default Productlist