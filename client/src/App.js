import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Darshboard from "./component/darshboard"
import SignUp from "./authComponent/signUp"
import SignIn from "./authComponent/signIn"
import Upload from "./component/upload"



function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Darshboard}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/signIn" component={SignIn}/>
        <Route path="/upload" component={Upload}/>
      </Switch>
    </Router>
  );
}

export default App;
