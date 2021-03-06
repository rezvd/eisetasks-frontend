import * as types from '../actions/actionTypes'

const initialState = {
    tasks: [],
    error: null
};


export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TASKS_SUCCESS: {
            return {
                ...state,
                tasks: action.tasks,
                error: null
            }
        }
        case types.GET_TASKS_ERROR: {
            return {
                ...state,
                tasks: [],
                error: action.error
            }
        }
        case types.CREATE_TASK_SUCCESS: {
            return {
                ...state,
                error: null
            }
        }
        case types.CREATE_TASK_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        case types.DELETE_TASK_SUCCESS: {
            return {
                ...state,
                error: null
            }
        }
        case types.DELETE_TASK_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        case types.UPDATE_TASK_SUCCESS: {
            return {
                ...state,
                error: null
            }
        }
        case types.UPDATE_TASK_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}