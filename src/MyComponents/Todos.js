import React from 'react'
import Todo from './Todo';

const Todos = (props) => {
    return (
        <div className='container'>
            <h5 className='my-3'>TO Dos List</h5>
            {props.todos.length === 0 ? "No Todos to display" : props.todos.map((todo) => {
                return (<Todo todo={todo} key={todo.no} onDelete={props.onDelete} />)
            })}
            {/* {} */}

        </div>
    )
}

export default Todos

