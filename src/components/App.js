import { AuthProvider } from "../components/contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeSection from "./SiteSections/HomeSection";
import Dashboard from "./authentication/Dashboard";
import ForgotPassword from "./authentication/ForgotPassword";
import Login from "./authentication/Login";
import PrivateRoute from "./authentication/PrivateRoute";
import Signup from "./authentication/Signup";
import Application from "./authentication/Application";
import SubmittedApplicaiton from "./authentication/SubmittedApplication";
import AccountUpdated from "./authentication/AccountUpdated";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeSection} />
        <AuthProvider>
          <PrivateRoute path="/account-updated" component={AccountUpdated} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute
            path="/submitted-application"
            component={SubmittedApplicaiton}
          />
          <PrivateRoute path="/application" component={Application} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </AuthProvider>
      </Switch>
    </Router>
  );
}

export default App;
