import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [categoryFilterClicked, setCategoryFilterClicked] = useState("All")
  const [details, setDetails] = useState('')
  const [newCategory, setNewCategory] = useState('')
  const [taskArray, setTaskArray] = useState(TASKS)


  // const tasks = TASKS

  // tasks.push()

  function onTaskFormSubmit(e) {
    e.preventDefault()
   const obj = {
     text: details,
     category: newCategory
   }
  console.log("its tteh value", e.target.value)
  }

  console.log(TASKS)

  // console.log("dsfgdsfgdas", setCategoryFilterClicked)



  // console.log('here it is agains', CATEGORIES)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} categoryFilterClicked={categoryFilterClicked} setCategoryFilterClicked={setCategoryFilterClicked}/>
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES} details={details} setDetails={setDetails} newCategory={newCategory} setNewCategory={setNewCategory}/>
      <TaskList tasks={taskArray} categoryFilterClicked={categoryFilterClicked}/>
    </div>
  );
}

export default App;
