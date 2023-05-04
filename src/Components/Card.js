import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function MyCard(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.imgsrc} alt ='cardImg' />
      <Card.Body>
        <Card.Title fw='bold'>{props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick='' >Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;