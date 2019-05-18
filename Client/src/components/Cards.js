
import React from "react";
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import student1 from "./Images/student1.jpg"


class Cards extends React.Component {
    render () {
    return(
 <div>
   <div className="container">
   <div className="row">
      <Card className="Card3" style={{ width: '30rem' }}>
            <Image  className="photo1" src={student1} rounded />
         <Card.Body>
            <Card.Title>Full Name</Card.Title>
            <Card.Text>
             About 
            </Card.Text>
            <button id="button5" type="submit" className="btn btn-light">Profile</button>
            <button id="button5" type="submit" className="btn btn-light">Schedule a Session</button>
         </Card.Body>
       </Card>
       <Card className="Card3" style={{ width: '30rem' }}>
       <Image  className="photo1" src={student1} rounded />
            <Card.Body>
               <Card.Title>Full Name</Card.Title>
               <Card.Text>
               About 
               </Card.Text>
               <button id="button5" type="submit" className="btn btn-light">Profile</button>
               <button id="button5" type="submit" className="btn btn-light">Schedule a Session</button>
            </Card.Body>
         </Card><Card className="Card3" style={{ width: '30rem' }}>
         <Image  className="photo1" src={student1} rounded />
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
