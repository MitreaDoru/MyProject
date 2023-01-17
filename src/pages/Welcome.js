import { Route } from "react-router-dom";
import MainHeader from "../components/MainHeader";

const Welcome = () => {
  return (
    <div>
      <MainHeader />
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, new user</p>
      </Route>
    </div>
  );
};

export default Welcome;
