import React from 'react'

export default function Todo({ todo, onDelete }) {
    return (
        <div className='container'>
            <h5>{todo.task}</h5>
            <p>{todo.desc}</p>
            <button className='btn btn-sm btn-danger' onClick={() => { onDelete(todo) }}>Delete</button>
        </div>
    )
}
