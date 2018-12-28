import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionRemoveTask } from "../actions";
import { Button, List } from 'semantic-ui-react';

class TodoList extends Component {
	constructor(props){
		super(props);
	}

	remTask = (index) => {
		let arr = [...this.props.arrayObj];
		console.log(arr);
		arr.splice(index, 1);
		console.log(arr);
		actionRemoveTask(arr);
	};

	render() {
		return (

			<List className='listTask'>{
				this.props.arrayObj.map((item, index) =>
					<List.Item
						key={index}
						className='itemTask'
					>
						<p>{item.value}</p>

						<Button
							inverted
							color='red'
							onClick={()=>{this.remTask(index)}}
						>
							removeTask
						</Button>
					</List.Item>
				)
			}</List>
		)
	}
}


export default connect(
	({ arrayObj }) => ({ arrayObj }),
	{ actionRemoveTask }
)(TodoList);