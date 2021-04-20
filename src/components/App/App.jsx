import {useAuth, useResolved} from 'hooks';
import { Switch, Route,useHistory } from 'react-router-dom';
import { Login, Signup, Chat } from 'components';
import {useEffect} from 'react';
 
export const App = () => {
  const history = useHistory(); // allow us to change the history such as log in , and redirect to chat page
  const {authUser} = useAuth();

  const authResolved = useResolved(authUser);
  // 
  useEffect(() => {
    if (authResolved) {
      history.push(!!authUser ? '/' : '/login'); // if authUser is true, return to chat, else return to login page
    }
  }, [authResolved, authUser, history ] );


  return (
    <div className="app">
      <Switch>
      <Route path="/" exact component={Chat} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
    </div>
  );
};