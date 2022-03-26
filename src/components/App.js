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
import AppDashLoading from "./authentication/AppDashLoading";
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";

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
          <PrivateRoute path="/appdash-loading" component={AppDashLoading} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/admin" component={AdminLogin}/>
          <Route path="/dashboard" component={Dashboard} />
        </AuthProvider>
      </Switch>
    </Router>
  );
}

export default App;
