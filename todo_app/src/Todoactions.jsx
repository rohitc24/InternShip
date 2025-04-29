import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import { nanoid } from 'nanoid'

function Todoactions() {

    const [todos, settodos] = useState([])
    const senddata = (task) => {
        settodos([...todos, { task: task, isdone: false, id: nanoid() }]);
    }

    const markasdone = (id) => {
        settodos((prevtodo) => {
            return prevtodo.map((todo) => {
                if (todo.id == id) {
                    return { ...todo, isdone: true }
                }
                else {
                    return todo;
                }
            })
        })
    }

    const deletetodo=(id)=>{
        settodos((prevtodo)=>{
            return prevtodo.filter((todo)=>{
                return todo.id!=id
            })
        })
    }
    return (
        <>
            <Todo senddata={senddata} />
            {
                todos.length > 0 ? <ul className=' my-10 w-100 p-2 mx-auto rounded-xl' >
                    {
                        todos.map((todo) => {
                            return (
                                todo.task &&
                                <li key={todo.id} style={{ listStyle: "circle inside", opacity: todo.isdone && 0.3,marginBottom:"20px",textDecoration: todo.isdone&&"line-through"}} >
                                    <Checkbox onClick={() => { markasdone(todo.id) }} disabled={todo.isdone} />
                                    {todo.task}
                                    <Button
                                        variant="contained"
                                        style={{ marginLeft: "20px" }}
                                       onClick={()=>deletetodo(todo.id)}
                                    >Delete
                                    </Button>
                                    <hr />
                                </li>
                            )

                        })
                    }
                </ul>
                :
                <p className='text-center'>Empty Todo</p>
            }
        </>
    )

}

export default Todoactions;