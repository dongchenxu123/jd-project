import React from 'react'
import { Route } from 'react-router-dom'

import App from '../components/Main';
import IndexComponent from '../components/index'


const RootRoutes = () => (
	<div>
		<Route exact path="/" component={IndexComponent}/>
		<Route path='/topics' component={App}/>
	</div>
 )

export default RootRoutes