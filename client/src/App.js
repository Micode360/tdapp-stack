import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Darshboard from "./component/darshboard"
import Register from "./authComponent/register"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Darshboard}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </Router>
  );
}

export default App;
