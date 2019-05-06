import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import First from './src/components/firstpage';
import Second from './src/components/secondpage';
import Third from './src/components/thirdpage';

class App extends React.Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path ='/landing' component={First}/>
          <Route path ='/main' component={Second}/>
          <Route exact path ='/search' component={Third}/>
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
