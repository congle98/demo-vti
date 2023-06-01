import React from 'react';
import {useState} from "react";
import axios from "axios";

const CreateTodo = () => {
    const [todo,setTodo] = useState([]);
    const [message,setMessage] = useState();

    const createTodo = () => {
        console.log("todo ", todo);
        axios.post("http://localhost:8080/todo",todo).then(rp => setMessage("Tạo mới thành công"))
    }
    return (
        <div>
          đây là create todo
            {message}
            <input type="text" onChange={(input) => setTodo({
                description:input.target.value})}/>
            <button onClick={createTodo}>add</button>
        </div>
    );
};

export default CreateTodo;