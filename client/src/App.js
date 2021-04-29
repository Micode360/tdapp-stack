import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Darshboard from "./component/darshboard"
import SignUp from "./authComponent/signUp"
import SignIn from "./authComponent/signIn"



function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Darshboard}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/signIn" component={SignIn}/>
      </Switch>
    </Router>
  );
}

export default App;
