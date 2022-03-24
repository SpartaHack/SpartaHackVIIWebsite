import { AuthProvider } from "../components/contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeSection from "./SiteSections/HomeSection";
// import DashboardLoading from "./authentication/DashboardLoading";
import ForgotPassword from "./authentication/ForgotPassword";
import Login from "./authentication/Login";
import PrivateRoute from "./authentication/PrivateRoute";
import Signup from "./authentication/Signup";
// import Application from "./authentication/Application";
import SubmittedApplicaiton from "./authentication/SubmittedApplication";
import AccountUpdated from "./authentication/AccountUpdated";
import Application from "./authentication/Application";
import ApplicationTwo from "./authentication/ApplicationTwo";
import ApplicationThree from "./authentication/ApplicationThree";
import AppDashLoading from "./authentication/AppDashLoading";

function App() {
  return (
    <Router basename={"/"}>
      <Switch>
        <Route exact path="/" component={HomeSection} />
        <AuthProvider>
          <PrivateRoute path="/account-updated" component={AccountUpdated} />
          <PrivateRoute
            path="/submitted-application"
            component={SubmittedApplicaiton}
          />
          <PrivateRoute path="/application" component={Application} />
          <PrivateRoute path="/applicationTwo" component={ApplicationTwo} />
          <PrivateRoute path="/applicationThree" component={ApplicationThree} />
          <PrivateRoute path="/appdash-loading" component={AppDashLoading} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </AuthProvider>
      </Switch>
    </Router>
  );
}

export default App;
