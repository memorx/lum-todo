import React, {useState, useEffect} from 'react'
import MockTodoItems from '../../data/MockTodoItems';
import MockCategories from '../../data/MockCategories'
import { TodoItem } from '../TodoItem';
import { AddTodoItem } from '../AddTodoItem';


const TodoList = () => {
    const [todoItems, setTodoItems] = useState(MockTodoItems);
    const [filteredTodoItems, setFilteredTodoItems] = useState(todoItems);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        filterTodos(todoItems, filter);
    },[todoItems, filter])
    
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
        setTodoItems(oldArray => [...oldArray, newItem]);
    } 

    return <div className='todoList'>
        <div className='title'>Todo</div>
        <div className='categoryDropdown'>
            <select onChange={onHandleChangeCategory}>
                <option value='' selected >No category</option>
                {MockCategories.map(category => 
                    <option value={category}>{category}</option>
                )}
            </select>
        </div>      
        <div>{filteredTodoItems.map(todoItem => <TodoItem key={todoItem.name} item={todoItem} />  )}</div>
        <div><AddTodoItem onHandleSubmit={handleSubmit}/></div>
    </div>;
}

export default TodoList;