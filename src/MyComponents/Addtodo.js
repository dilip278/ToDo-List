import React, { useState } from 'react'

export default function Addtodo(props) {
    let [title, settitle] = useState("");
    let [desc, setdesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Desc can not be blank");
        } else {
            props.addTodo(title, desc);
            settitle("");
            setdesc("");
        }
    }
    return (
        <div className='container my-3'>
            <h3>Add A To Do</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={((e) => { settitle(e.target.value) })} className="form-control" id="tite" aria-describedby="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={((e) => { setdesc(e.target.value) })} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-primary">Add Todo</button>
            </form>
        </div>
    )
}
