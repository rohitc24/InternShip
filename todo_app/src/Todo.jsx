import React, { useState } from 'react';
import { TextField, Button } from '@mui/material'
function Todo({ senddata }) {
    // console.log(senddata)
    const [task, settask] = useState("")

    return (
        <div>
        <h1 className='text-center mt-5 font-bold underline'>TODO APP</h1>
        <div className='bg-slate-100 flex justify-center my-10 w-100 p-2 mx-auto rounded-xl color-black'>
           
            <TextField
             id="standard-basic"
             label="Task"
             variant="standard"
             value={task} onChange={(e) => settask(e.target.value)} />
             <Button
                variant="contained"
                style={{ marginLeft: "20px" }}
                onClick={() => senddata(task)}
                disabled={!task.length}
            >ADD TASK
            </Button>


        </div>
        </div>
    );
}

export default Todo;