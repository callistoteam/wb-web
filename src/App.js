import React from "react";
import {
  StaticRouter,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Redirecting from './components/Redirecting'


import Home from './pages/Home'
import Stock from './pages/Stock'
import OnDev from './pages/OnDevelop'
import Invite from './pages/Invite'
import Ezinvite from './pages/EzInvite'
import InviteSuccess from './pages/InviteSuccess'
import NotFound from './pages/404'
import Shards from './pages/Shards'

export default function App() {
  return (
    <Router>
        <Navbar/>
        <div style={{position: "relative"}}>
        <Switch>
          <Router exact path='/'>
            <Home />
          </Router>
          <Router path='/stocks'>
              <Stock/>
          </Router>
          <Router path='/dash'>
            <OnDev/>
          </Router>
          <Router path='/discord'>
            <Redirecting to='https://invite.gg/wonderbot'/>
          </Router>
          <Router path='/tos'>
            <Redirecting to='https://callisto.team/tos'/>
          </Router>
          <Router exact path={['/invite', '/invite/custom']}>
            <Invite/>
          </Router>
          <Router path='/invite/ez'>
            <Ezinvite/>
          </Router>
          <Router path='/shards'>
            <Shards/>
          </Router>
          <Router path='/invite/success*'>
            <InviteSuccess/>
          </Router>
          {/*404*/}
          <NotFound/> 
        </Switch>

        </div>
        <Footer />
    </Router>
  );
}
