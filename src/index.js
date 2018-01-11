import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route,BrowserRouter as Router,Switch,Link} from 'react-router-dom';

// import {syncHistoryWithStore} from 'reat-router-redux';
// import App from '../src/containers/App.js'
import Home from '../src/containers/Home.js'
import Foo from '../src/containers/Foo.js'
import Bar from '../src/containers/Bar.js'
import Antd from '../src/containers/Antd.js'
import finalCreateStore from '../src/store/configureStore' 
import reducer from '../src/reducers/index.js'
import DevTools from '../src/containers/DevTools.js'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 

const store=finalCreateStore(reducer)
// console.log(store.getState())
// const history=syncHistoryWithStore(BrowserRouter,store)
ReactDOM.render(
<Provider store={store}>
	<div>
   		<Router>
			<div>
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
	                        <span className="navbar-brand" href="#">
	                            <Link to="/index">Redux</Link>
	                        </span>
	                    </div>
	                    <ul className="nav navbar-nav">
	                        <li>	
								<Link to='/index'>计数器</Link>
	                        </li>
							<li>	
								<Link to='/foo'>静态数据</Link>
	                        </li>
							<li>	
								<Link to='/bar'>动态数据</Link>
	                        </li>
							<li>	
								<Link to='/antd'>结合Antd</Link>
	                        </li> 	                        	                        	                                            
	                    </ul>					
					</div>
				</nav>				
				<Switch>
		   			<Route path='/index' exact component={Home} />
		   			<Route path='/foo' component={Foo} />
		   			<Route path='/bar' component={Bar} />
		   			<Route path='/antd' component={Antd} />
	   			</Switch>			
			</div>
   		</Router>
   		<DevTools />
   	</div> 
</Provider>,
document.getElementById('root')
);
