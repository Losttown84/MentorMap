import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';

import Profile from './pages/profile';
import Mainpage from './pages/mainpage';
import Session from './pages/session';
import Search from './pages/createProfile';
import Contact from './pages/contact';
import CreatePro from './pages/profilepage';
import Fav from "./pages/Favorites";

class App extends React.Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path ='/contact' component={Contact}/>
          <Route exact path ='/profile' component={Profile}/>
          <Route exact path ='/findmentor' component={CreatePro}/>
          <Route exact path ='/signup' component={Mainpage}/>
          <Route path ='/createsession' component={Session}/>
          <Route path ='/mentor' component={Search}/>
          <Route exact path ='/profile/:id' component={Search}/>
          <Route exact path ="/favorites" component={Fav}/>
        </Switch>
      </div>
    )
  return (
    <Switch>
      <App/>
    </Switch>
  
  );
  }
}

export default App;
