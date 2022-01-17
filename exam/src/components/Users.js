import React from 'react'
import './Users.css'
function Users(props) {
	let arr = props.data
	return (
		<div className="Users">
			{arr.map((el,id) => {
				return (
					<div key={id} className="Users_child">
						<div>{el.id}</div>
						<h2>{el.title}</h2>
						<h3>{el.completed}</h3>
					</div>
				)
			})}
		</div>
	)
}

export default Users
