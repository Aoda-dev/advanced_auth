import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//routing
import PrivateRoute from './components/routing/PrivateRoute';

//screens
import PrivateScreen from './components/screens/PrivateScreen';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import ForgotpasswordScreen from './components/screens/ForgotpasswordScreen';
import ResetPasswordScreen from './components/screens/ResetPasswordScreen';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <PrivateRoute exact path='/' component={PrivateScreen} />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/register' component={RegisterScreen} />
          <Route exact path='/forgotpassword' component={ForgotpasswordScreen} />
          <Route exact path='/passwordreset/:resetToken' component={ResetPasswordScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
