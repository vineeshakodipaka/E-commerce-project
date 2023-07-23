import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Addproducts(){
const [data,setData]=useState({})
const changename=(e)=>{
  setData({...data,[e.target.name]:e.target.value})
}
const submitform=(e)=>{
  e.preventDefault();
  const inputobj={
    title:data.title,
    catagory:data.catagory,
    price:data.orprice,
    price:data.ofprice,
    image:data.image
  }
  const requestOptions={
    method:"POST",
    headers:{"Content-TYpe":"application/json"},
    body:JSON.stringify(inputobj)

  }
  fetch("https://63de1e7cf1af41051b0dc6a3.mockapi.io/Data/Api",requestOptions)
  .then((resp)=>resp.json())
  .then((res)=>
  
  setData(
    {
      title:"",
      catagory:"",
      orprice:"",
      ofprice:"",
      image:""
    }
  ))
  console.log(data)
}
  return(
    <>
  <h3><u> -:ProductListForm:-</u></h3>
   
   <Form onSubmit={submitform}>
      <Form.Group className="mb-3"  controlId="formBasicEmail">
        <Form.Label>Enter title:</Form.Label>
        <Form.Control  type="text" placeholder="Enter Title" value={data.title}
        onChange={changename} name="title" />
    
      </Form.Group>

      <Form.Group className="mb-3"  controlId="formBasicEmail">
        <Form.Label>Enter catagory:</Form.Label>
        <Form.Control type="text" placeholder="Enter catagory" value={data.catagory}
        onChange={changename} name="catagory" />
    
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Image:</Form.Label>
        <Form.Control type="text" placeholder="Enter image" value={data.image}
        onChange={changename}  name="image" />
    
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Original Price:</Form.Label>
        <Form.Control type="text" placeholder="Enter original price" value={data.orprice}
        onChange={changename}  name="price" />
    
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Offered Price:</Form.Label>
        <Form.Control type="text" placeholder="Enter offered price" value={data.ofprice}
        onChange={changename}  name="price" />
    
      </Form.Group>

    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </>
  )
}
export default Addproducts