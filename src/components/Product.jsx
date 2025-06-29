import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {toast} from "react-toastify";

const Product = (props) => {

  const [productQuantity,setProductQuantity] = useState(0);

  function addOne(){
    setProductQuantity(productQuantity+1);
    props.onAddQuantity();
    toast.success("Added to Cart");
  }

  function removeOne(){
    if(productQuantity==0){
      return toast.error("The Product Quantity is already zero!");
    }
    setProductQuantity(productQuantity-1);
    props.onRemoveQuantity();
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

        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <Button variant="primary" size="sm" onClick={addOne} className="me-2">
              Add
            </Button>
            <Button variant="danger" size="sm" onClick={removeOne}>
              Remove
            </Button>
          </div>
          <div>
            <span className="badge bg-secondary p-2">Qty: {productQuantity}</span>
          </div>
        </div>
      </Card.Body>
    </Card>
    
    </>

  ;
}

export default Product;
