import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { TodoItem } from '../TodoItem';
import { AddTodoItem } from '../AddTodoItem';
import { addTodoItem, addCategory } from '../../js/actions/index'
 
const mapStateToProps = state => {
    return { 
        todoItems: state.todoItems,
        categories: state.categories
    }
}

const mapDispatchToProps= dispatch => {
    return {
        addTodoList: todoList => dispatch(addTodoItem(todoList)),
        addCategory: category => dispatch(addCategory(category))
    }
}

const ConnectedTodoList = (props) => {
    //const [todoItems, setTodoItems] = useState(props.todoItems);
    const [filteredTodoItems, setFilteredTodoItems] = useState(props.todoItems);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        filterTodos(props.todoItems, filter);
    },[props.todoItems, filter])
    
    const filterTodos = (allTodoItems, selectedCategory) => {
        if (selectedCategory !== '') 
            setFilteredTodoItems(allTodoItems.filter(todoItem => todoItem.category === selectedCategory))
        else 
            setFilteredTodoItems(allTodoItems)
    }

    const onHandleChangeCategory= (event) => {
        setFilter(event.target.value);
    }

    const handleSubmit = (name, category) => {
        const newItem = {name, category, completed: false};
        
        const itemExist = props.todoItems.find(item => item.name === name);
        if (!itemExist) {
            props.addTodoList(newItem);
        
            const categoryExist = props.categories.find(categoryItem => categoryItem === category);
            if (!categoryExist) {
                props.addCategory(category);
            }
        }
    } 

    return <div className='todoList'>
        <div className='title'>Todo</div>
        <div className='categoryDropdown'>
            <select onChange={onHandleChangeCategory}>
                <option value='' defaultValue >No category</option>
                {props.categories.map(category => 
                    <option key={category} value={category}>{category}</option>
                )}
            </select>
        </div>      
        <div>{filteredTodoItems.map(todoItem => <TodoItem key={todoItem.name} item={todoItem} />  )}</div>
        <div><AddTodoItem onHandleSubmit={handleSubmit}/></div>
    </div>;
}


const TodoList = connect(mapStateToProps, mapDispatchToProps)(ConnectedTodoList)

export default TodoList;