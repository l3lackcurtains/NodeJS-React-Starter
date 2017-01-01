import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import store from './redux'
import main from './components'
import login from './components/login'
import home from './components/home'
import fetchNews from './redux/actions/news'
import './index.css';


const history = syncHistoryWithStore(browserHistory, store)
const root = document.getElementById('root');


render(
	<Provider store={store}>
		<Router history={history}>
		  <Route path="/" component={main}>
		  	<IndexRoute component={home}></IndexRoute>
		  	<Route path="/login" component={login}></Route>
		  </Route>     	
		</Router>
	</Provider>
  ,
  root
);
