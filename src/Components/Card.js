import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function MyCard(props) {
  return (
    <Card style={{ minWidth: '15rem', width: '22rem' }} className='col-sm-12 col-md-6 col-lg-4 justify-content-between m-2'>
      <Card.Img variant="top" src={props.imgsrc} alt='cardImg' />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;