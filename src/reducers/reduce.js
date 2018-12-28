export const actionAddStoreType = {
		ADD_TASK: 'ADD_TASK',
		ADD_CHANGE: 'ADD_CHANGE',
		REMOVE_ALL: 'REMOVE_ALL',
		REMOVE_TASK: 'REMOVE_TASK'
};

const initialState = {
	arrayObj: [],
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionAddStoreType.ADD_TASK:
			console.log("action", action);
			return { arrayObj: [
					...state.arrayObj,
					{ value: action.payload }
				],
				};
			break;
		case actionAddStoreType.REMOVE_ALL:
			return state = initialState;
			break;
		case actionAddStoreType.REMOVE_TASK:
			console.log(state, 'state');
			console.log(action, 'action');
			return {
				arrayObj: action.payload
			};
			break;
		default:
			return state;
	}
};

