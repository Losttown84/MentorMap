import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import First from './components/firstpage';
import Second from './components/secondpage';
import Third from './components/thirdpage';

class App extends React.Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path ='/' component={First}/>
          <Route path ='/createprofile' component={Second}/>
          <Route path ='/mentor' component={Second}/>
          <Route exact path ='/profile/:id' component={Third}/>
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
