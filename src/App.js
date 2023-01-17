import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import SignInForm from "./components/SignInForm";
import LogInForm from "./components/LogInForm";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/sign-in" exact>
          <SignInForm />
        </Route>
        <Route path="/log-in">
          <LogInForm />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
