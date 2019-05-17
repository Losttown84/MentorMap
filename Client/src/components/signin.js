import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleTyping = this.handleTyping.bind(this);

    this.state = {
      activeTab: '1',
      email: '',
      password: ''
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  handleLogin = () => {
    console.log('you got clicked!')

    var loginStuff ={
      username: this.state.email,
      password: this.state.password
    }
    if (this.state.activeTab === '1') {
      axios.post('/api/login', loginStuff).then(function(data) {
        console.log('we got this back!!!', data);
      })
    } else if(this.state.activeTab === '2') {
      axios.post('/api/signup', loginStuff).then(function(data) {
        console.log('we got this back!!!', data);
      })
    }
    

  }

  

  handleTyping = (event) => {
    console.log('we hit@', event.target.name, event.target.value)
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    console.log('state!', this.state)
    return (
      <div>
        <Nav tabs className="signup2">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Signup
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="6">
                <h4>Login Below</h4>
                <Card body>
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input onChange={this.handleTyping} type="email" name="email" id="exampleEmail" placeholder="johnsmith@abc.com" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input onChange={this.handleTyping} type="password" name="password" id="examplePassword" placeholder="enter your password" />
                    </FormGroup>
                  <Button onClick={this.handleLogin}>Login</Button>
                  </Form>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
              <h4>New User? Signup!</h4>
                <Card body>
                  <Form>
                    <FormGroup>
                      <Label for="username">Username</Label>
                      <Input placeholder="username" />
                    </FormGroup>  
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input onChange={this.handleTyping} type="email" name="email" id="exampleEmail" placeholder="johnsmith@abc.com" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input onChange={this.handleTyping} type="password" name="password" id="examplePassword" placeholder="create a password" />
                    </FormGroup>
                  <Button onClick={this.handleLogin}>Register</Button>
                  </Form>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
