import React from 'react'
import {Route} from 'react-router'

import AppComponent from './modules/app/AppComponent'
import LoginComponent from './modules/login/LoginComponent'
<<<<<<< HEAD

import EntryComponent from './modules/management/entry/EntryComponent'
import SearchComponent from './modules/management/search/SearchComponent'

import POComponent from './modules/PO/POComponent'
import QuoteComponent from './modules/Quote/QuoteComponent'
import QcompileComponent from './modules/Qcompile/QcompileComponent'
import regComponent from './modules/reg/regComponent'


export default [
	<Route path="/" component={AppComponent}>
		<Route path="/management/entry" component={EntryComponent} />
		<Route path="/management/search" component={SearchComponent} />
		<Route path="/PO" component={POComponent} />
		<Route path="/Quote" component={QuoteComponent} />
		<Route path="/Qcompile" component={QcompileComponent} />
	</Route>,
	<Route path="/login" component={LoginComponent}/>,
	<Route path="/reg" component={regComponent}/>
	
]
=======
import EntryComponent from './modules/management/entry/EntryComponent'
import SearchComponent from './modules/management/search/SearchComponent'
import POComponent from './modules/PO/POComponent'
import QuoteComponent from './modules/Quote/QuoteComponent'
import QcompileComponent from './modules/Qcompile/QcompileComponent'

export default [
	<Route path="/" component={AppComponent}>
		<Route path="/login" component={LoginComponent}/>,
		 <Route path="/management/entry" component={EntryComponent} />,
		<Route path="/management/search" component={SearchComponent} />,
		<Route path="/PO" component={POComponent} />,
	<Route path="/Quote" component={QuoteComponent} />,
	<Route path="/Qcompile" component={QcompileComponent} />
	</Route>
	
]

		

>>>>>>> 3317f705e246fd7892f111de1ca57182f310e82c
