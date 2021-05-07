import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

import SignIn from './pages/auth/SignIn';
import SignOut from './pages/auth/SignOut';
import SignUp from './pages/auth/SignUp';

import Order from './pages/orders/Order';
import AllOrders from './pages/orders/AllOrders';

import Ticket from './pages/tickets/Ticket';
import CreateTicket from './pages/tickets/CreateTicket';

const Routes = ({ currentUser }) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/auth/signup" component={SignUp} />
      <Route path="/auth/signin" component={SignIn} />
      <Route path="/auth/signout" component={SignOut} />

      <Route path="/tickets/old" component={CreateTicket} />
      <Route path="/tickets/:ticketId" component={Ticket} />

      <Route exact path="/orders" component={AllOrders} />
      <Route path="/orders/:orderId">
        <Order currentUser={currentUser} />
      </Route>
    </Switch>
  );
};

export default Routes;
