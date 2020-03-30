import React, {useState} from 'react'

export const AddTodoItem = (props) => {   
    const {onHandleSubmit} = props;
    
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onHandleSubmit(name, category);
        setName('');
        setCategory('');
    }

    return <form onSubmit={handleSubmit}>
        <input className='checkbox' type='submit' value='+' /> 
        <input type='text' value={name} onChange={event => setName(event.target.value)} placeholder='task' />
        <input type='category' value={category} onChange={event => setCategory(event.target.value)} placeholder='category' />
    </form>;
}