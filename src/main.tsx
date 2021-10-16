import { render } from 'preact'
import { Router, Route } from 'preact-router';
import AsyncRoute from 'preact-async-route';

import 'virtual:windi.css'

import Home from './pages/Home'

const Main = () => (
  <Router>
    <Route path="/" component={Home} />
    <AsyncRoute
      path="/profile"
      getComponent={() => import('./pages/Profile').then(module => module.default)}
      loading={() => <div>loading...</div>}
    />
  </Router>
)

render(<Main />, document.getElementById('app')!)
