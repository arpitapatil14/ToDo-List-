"use client"
import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
    
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1); // Use splice to remove the task at index i
    setMainTask(copyTask);
  }

  let renderTask = <h2>No task available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => (
      <li key={i} className='flex items-center justify-between mb-8'>
        <div className='flex justify-between mb-5 w-2/3'>
          <h3 className='text-4xl font-semibold'>{t.title}</h3>
          <h3 className='text-3xl font-medium'>{t.desc}</h3>
        </div>
        <button onClick={() => deleteHandler(i)} id='btt' className=" text-white px-4 py-2 rounded">Delete Task</button>
      </li>
    ));
  }

  return (
    <>
      <h1 id='header' className='text-black text-5xl p-5 font-medium text-center'>Todo List</h1>
      <form onSubmit={submitHandler}>
        <input  type='text' className='px-4 py-2 m-8 text-black text-2xl ' placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type='text' className='px-4 py-2 m-8 text-black text-2xl ' placeholder='Enter Description' value={desc} onChange={(e) => setDesc(e.target.value)} />
        <button id='btt' className=' text-white px-4 py-3 m-5 text-2xl font-bold rounded'>Add Task</button>
      </form>
      <div className='p-8 text-black' >
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default Page;
