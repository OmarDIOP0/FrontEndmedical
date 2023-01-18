import './App.css';
import { BrowserRouter as Router , Link, Route ,Switch } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import NotFound from './Component/NotFound';
import Layout from './Component/Layout';
function App() {
  return (
    <div className="text-center">
      
      <Router>
        <Layout/>
        <Switch>
            <Route exact path='/home'>
                <Home />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/dashboard'>
              <Dashboard />
            </Route>
            <Route path={'*'}>
              <NotFound/>
            </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
