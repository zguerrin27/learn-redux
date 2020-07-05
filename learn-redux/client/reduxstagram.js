import React from 'react';
import { render } from 'react-dom';

// import css
import css from './styles/style.styl'

// import components 
import Main from './components/Main'
import Photogrid from './components/Photogrid'
import Single from './components/Single'

// import react router dependencies 
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
  <Provider store={store}>
  <Router history={history}>
    <Route path="/" component={Main}>
      <IndexRoute component={Photogrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
  </Provider>
)

render(router, document.getElementById('root'));

