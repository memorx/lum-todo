import React, {useState} from 'react'

export const TodoItem = (props) => {   
    const {name, category, completed} = props.item;
    const [taskCompleted, setTaskCompleted] = useState(completed);

    const handleInputChange = (event) => {
        setTaskCompleted(!taskCompleted);
    }

    return <div className={taskCompleted ? 'listItem completed' : 'listItem'}>
        <input name='completed 'type='checkbox' checked={taskCompleted} onChange={handleInputChange} />
        <span>{name}</span>
        <span className='category'>{category}</span>
    </div>;
}

