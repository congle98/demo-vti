import React, {useEffect, useState} from 'react';

import axios from "axios";
const Todo = () => {
    const [todos,setTodos] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/todo").then(rp => {
            console.log(rp.data)
            setTodos(rp.data)
        })
    },[])
    return (
        <div>
            {todos.map((it) =>
                (<div key={it.id}>
                    <h1>{it.description}</h1>
                </div>)
            )}
        </div>
    );
};

export default Todo;