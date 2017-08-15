import React from 'react'
import {Route} from 'react-router'

import AppComponent from './modules/app/AppComponent'
import LoginComponent from './modules/login/LoginComponent'
import EntryComponent from './modules/management/entry/EntryComponent'
import SearchComponent from './modules/management/search/SearchComponent'

export default (
	<Route path="/" component={AppComponent}>
		<Route path="/login" component={LoginComponent}/>
		 <Route path="/management/entry" component={EntryComponent} />
		<Route path="/management/search" component={SearchComponent} />
	</Route>
	
)