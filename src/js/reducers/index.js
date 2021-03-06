import { ADD_TODO_ITEM } from "../constants/action-types";
import { ADD_CATEGORY } from "../constants/action-types";
import { TOOGLE_TASK } from "../constants/action-types"

const initialState = {
    todoItems: [{
        name: 'laundry',
        category: 'home',
        completed: false
    }, {
       name: 'write report',
       category: 'work',
       completed: false 
    }, {
       name: 'vacuum',
       category: 'home',
       completed: false
    }],
    categories: ['home', 'work']
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_TODO_ITEM) {
        return Object.assign({}, state, {
            todoItems: state.todoItems.concat(action.payload)
        });
    }

    if (action.type === ADD_CATEGORY) {
        return Object.assign({}, state, {
            categories: state.categories.concat(action.payload)
        });
    }


    if (action.type === TOOGLE_TASK) {
        return { 
            ...state, 
            todoItems: state.todoItems.map(
                (todoItem, i) => i === 1 ? 
                    {...todoItem, completed: action.payload}: todoItem
            )
         }
    }

    return state;
};

export default rootReducer;

