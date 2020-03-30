import store from '../js/store/index';
import { addTodoItem } from '../js/actions/index';
import { addCategory } from '../js/actions/index';

window.store = store;
window.addATodoItem = addTodoItem;
window.addCategory = addCategory;