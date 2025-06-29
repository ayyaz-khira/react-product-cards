import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {toast} from "react-toastify";

const Product = (props) => {

  const [productQuantity,setProductQuantity] = useState(0);

  function addOne(){
    setProductQuantity(productQuantity+1);
    toast.success("Added to Cart");
  }



  return <>
    <Card style={{ width: '100%' }} className="h-100">
      <Card.Img variant="top" src={props.url} style={{ height: '180px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        
        <Card.Text>
          <strong>Price:</strong> ${props.price}
        </Card.Text>

        <Button variant="primary" onClick={addOne} >AddToCart</Button>
        <Button variant="primary" style={{marginLeft:"6px"}} >{productQuantity}</Button>
      </Card.Body>
    </Card>
    
    </>

  ;
}

export default Product;
