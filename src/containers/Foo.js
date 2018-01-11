import React ,{Component} from 'react'
import {connect} from 'react-redux'

class Foo extends Component{
	render(){

		const {lists} =this.props
		console.log(lists)
		return(
			<div>
				<ul className="list-group">
					{
						lists.map((e,index)=>{
							return <li className="list-group-item" key={index}>{e.text}</li>
						})
					}
				</ul>
			</div>
		)
	}
}
const getList = state => {
	return {
		lists:state.update.lists
	}
}

export default connect(getList)(Foo)
