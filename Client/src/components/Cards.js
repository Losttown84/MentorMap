
import React from "react";
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'


class Cards extends React.Component {
    render () {
    return(
 <div>
   <div className="container">
   <div className="row">
      <Card className="Card3" style={{ width: '30rem' }}>
            <Image src="holder.js/171x180" rounded />
         <Card.Body>
            <Card.Title>Full Name</Card.Title>
            <Card.Text>
             About 
            </Card.Text>
            <button id="button5" type="submit" className="btn btn-light">Profile</button>
            <button id="button5" type="submit" className="btn btn-light">Schedule a Session</button>
         </Card.Body>
       </Card>
       </div>
       </div>
 </div>
    );
    }
}

export default Cards;
