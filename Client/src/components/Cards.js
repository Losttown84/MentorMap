
import React from "react";
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'


class Cards extends React.Component {
    render () {
    return(
 <div>
   <div className="container">
   <div className="row">
      <Card style={{ width: '18rem' }}>
            <Image src="holder.js/171x180" rounded />
         <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
               Some quick example text to build on the card title and make up the bulk of
               the card's content.
            </Card.Text>
            <button type="submit" className="btn btn-light">Go somewhere</button>
         </Card.Body>
       </Card>
       </div>
       </div>
 </div>
    );
    }
}

export default Cards;
