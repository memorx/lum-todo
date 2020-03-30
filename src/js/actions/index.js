import { ADD_TODO_ITEM } from "../constants/action-types"
import { ADD_CATEGORY } from "../constants/action-types"

export function addTodoItem(payload) {
    return { type: ADD_TODO_ITEM, payload}
}

export function addCategory(payload) {
    return { type: ADD_CATEGORY, payload}
}