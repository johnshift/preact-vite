import 'virtual:windi.css';
import { Route, Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';
import Home from './pages/Home';
import { render } from 'preact';

const Main = () => (
  <Router>
    <Route path="/" component={Home} />
    <AsyncRoute
      path="/profile"
      getComponent={() => import('./pages/Profile').then((module) => module.default)}
      loading={() => <div>loading...</div>}
    />
  </Router>
);

render(<Main />, document.getElementById('app')!);
