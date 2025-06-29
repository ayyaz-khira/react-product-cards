import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = (props) => {
  return <>
    <Card style={{ width: '100%' }} className="h-100">
      <Card.Img variant="top" src={props.url} style={{ height: '180px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        
        <Card.Text>
          <strong>Price:</strong> ${props.price}
        </Card.Text>

        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    
    </>

  ;
}

export default Product;
