import { store } from '../index';
import { actionAddStoreType } from '../reducers/reduce';

export const actionAddTask = (value) => {
	store.dispatch({
		type: actionAddStoreType.ADD_TASK,
		payload: value,
	});
};

export const actionRemoveAll = () => {
	store.dispatch({
		type: actionAddStoreType.REMOVE_ALL,
	})
};

export const actionRemoveTask = (arr) => {
	store.dispatch({
		type: actionAddStoreType.REMOVE_TASK,
		payload: arr,
	})
};