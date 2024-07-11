"use client";
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here (e.g., add the todo item)
    console.log(title);
    console.log(desc);
    setMainTask([...mainTask, { title, desc }]); // means store all prev data and current data in mainTask
    // Clear the form after submission
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };

  const deleteHandler = (index) => {
    let copyTask = [...mainTask];
    copyTask.splice(index, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2>No Task added</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between">
          <div className="flex items-center justify-between mb-5 w-2/3">
            <h5>{t.title}</h5>
            <h5>{t.desc}</h5>
          </div>
          <div>
            <button
              onClick={() => {
                deleteHandler(i);
              }}
              className="bg-red-500"
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white text-xl text-center py-2">
        Amit's Todolist
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border-zinc-800 px-4 py-3 m-8"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="border-zinc-800 px-4 py-3 m-8"
          placeholder="Enter description here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button type="submit" className="m-5 px-4 py-3 bg-black text-white">
          Add
        </button>
      </form>
      <hr />
      <div className="p-4 bg-slate-500 text-center m-4">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Page;
