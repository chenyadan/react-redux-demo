import React, { Component } from 'react' // 引入React
import { Link } from 'react-router-dom' 

export default class App extends Component{
	render(){
		return(
			<div>
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
                            <span className="navbar-brand" href="#">
                                <Link to="/">Redux</Link>
                            </span>
                        </div>
                        <ul className="nav navbar-nav">
	                        <li>	
								<Link to='/index'>计数器</Link>
	                        </li>
                        </ul>					
					</div>
				</nav>
			</div>
		)
	}
}