import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import {useEffect} from "react";
import { auth } from "./firebase";
import {useStateValue} from "./StateProvider";

function App() {
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
        // will only run once when the app component loads...
        auth.onAuthStateChanged(authUser => {
            console.log('THE USER İS: ', authUser);
            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    }, [])
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route path="/login">
                     <Login />
                  </Route>
                  <Route path="/checkout">
                      <Header />
                      <Checkout />
                  </Route>
                  <Route path="/">
                      <Header />
                      <Home />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
