import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact'
import About from './components/About'
function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <div className="logo">
            Taimoor <br /> Shahzada
          </div>
          <ul>
            <li>
              <Link className="link" to="/">Home</Link>
            </li>
            <li>
              <Link className="link" to="/about">About</Link>
            </li>
            <li>
              <Link className="link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/contact">
            <Contact />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
