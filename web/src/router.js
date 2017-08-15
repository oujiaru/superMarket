import React from 'react'
import {Route} from 'react-router'

import AppComponent from './modules/app/AppComponent'
import LoginComponent from './modules/login/LoginComponent'
<<<<<<< HEAD
import EntryComponent from './modules/management/entry/EntryComponent'
import SearchComponent from './modules/management/search/SearchComponent'
=======
import POComponent from './modules/PO/POComponent'
import QuoteComponent from './modules/Quote/QuoteComponent'
import QcompileComponent from './modules/Qcompile/QcompileComponent'
>>>>>>> 570f3415e4d2c91f06eaaa2e289d653d6630386f

export default (
	<Route path="/" component={AppComponent}>
<<<<<<< HEAD
		<Route path="/login" component={LoginComponent}/>
		 <Route path="/management/entry" component={EntryComponent} />
		<Route path="/management/search" component={SearchComponent} />
	</Route>
	
)
=======
		
	</Route>,
	<Route path="/login" component={LoginComponent}/>,
	<Route path="/PO" component={POComponent} />,
	<Route path="/Quote" component={QuoteComponent} />,
	<Route path="/Qcompile" component={QcompileComponent} />
]
>>>>>>> 570f3415e4d2c91f06eaaa2e289d653d6630386f
