import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import Mainpage from './pages/mainpage';
import Session from './pages/session';
import Search from './pages/search';

class App extends React.Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path ='/signup' component={Mainpage}/>
          <Route path ='/createprofile' component={Session}/>
          <Route path ='/mentor' component={Search}/>
          <Route exact path ='/profile/:id' component={Search}/>
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
