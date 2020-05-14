import React from 'react';
// import { chartjs } from './helpers';

// import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';
// import ProTip from './ProTip';
// import SignIn from './templates/SignInSide';
// import Dashboard from './templates/dashboard/Dashboard';
// import { UserList as UserListView, } from './views';
// import UserList from './views/UserList';
// import { UsersToolbar, UsersTable } from './components';

// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';

// function Copyright() {
  //   return (
    //     <Typography variant="body2" color="textSecondary" align="center">
    //       {'Copyright © '}
    //       <Link color="inherit" href="https://material-ui.com/">
    //         Your Website
    //       </Link>{' '}
    //       {new Date().getFullYear()}
    //       {'.'}
    //     </Typography>
    //   );
    // }
import Admin from './base/Admin';
import Home from './views/Home';
import Users from './views/Users';
import Teams from './views/Teams';
import Accounts from './views/Accounts';

const App = () => {
  return (
    <Admin title="Admin Alliance" template="alliance-material">
      <Home url="/home" title="Inicio" />
      <Users url="/users" api_url="/api/v2/users" title="Usuarios" />
      <Teams url="/teams" />
      <Accounts url="/accounts" />
    </Admin>
  )
}

export default App;
