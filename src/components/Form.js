import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Divider, Input, Button } from 'semantic-ui-react'

import {
	actionAddTask,
	actionRemoveAll,
	actionRemoveTask
} from '../actions';
import TodoList from './TodoList';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
		}
	}

	addTask = (e) => {
		e.preventDefault();
		if (this.state.text.length) {
			this.props.actionAddTask(this.state.text);
			this.setState({
				text: ""
			})
		}
	};

	addChange = (e) => {
		this.setState({
			text: e.target.value
		});
	};

	removeAll = () => {
		actionRemoveAll();
	};

	render() {
		return (
			<Container>
				<div className='enterTask'>
					<h1>To Do </h1>
					<a href="#" onClick={this.removeAll}>Начать новий список</a>
					<form onSubmit={this.addTask}>
						<label htmlFor="task">Enter Task</label>
						<Input
							focus
							placeholder='Search...'
							type="text"
							onChange={this.addChange}
							value={this.state.text}
						/>
						<Button inverted color='green'>
							Add Task
						</Button>
					</form>
				</div>
				<Divider />
				<TodoList />
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		text: state.text,
	}
}

function mapDispatchToProps() {
	return {
		actionAddTask,
		actionRemoveAll,
		actionRemoveTask
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);