import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });





function App() {
  const [category, setCategory] = useState('')
  const [newCategory, setNewCategory] = useState('')
  const [newName, setNewName] = useState('')
  const [updatedTasks, setUpdatedTasks] = useState(TASKS)

  // const [tasks, setTasks] = useState(TASKS)
// console.log("first click", categorys)

  function handleClassAndFilter(e) {
    e.target.classList.add("selected")
// capture clicked button in state
// filter thtough tasks, check to see if clickebutton === "All", return true
// else if category === task.category, return true
setCategory(e.target.value)
    }

    const newArray = TASKS.filter((task) => {
      // console.log("this is the clicked button", category)
       if(category === "All"){
        return true;
      } else if (category === task.category){
        return true;
      } else {
        return false;
      }
    })

    function newNameFunc (e) {
      setNewName(e.target.value)
      // console.log(newName)
    }

    function newCategoryFunc(e) {
      setNewCategory(e.target.value)
    }

    function addNewItem(e) {
      e.preventDefault()
const newObj = {
  text: newName,
  category: newCategory
}
setUpdatedTasks([...updatedTasks, newObj])
    }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleClassAndFilter={handleClassAndFilter}/>
      <NewTaskForm categories={CATEGORIES} newNameFunc={newNameFunc} newCategoryFunc={newCategoryFunc} addNewItem={addNewItem}/>
      <TaskList categories={CATEGORIES} newArray={newArray} updatedTasks={updatedTasks}/>
    </div>
  );
}

export default App;






















// import React, { useState } from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });


// function App() {
//   const [categoryFilterClicked, setCategoryFilterClicked] = useState("All")
//   const [details, setDetails] = useState('')
//   const [newCategory, setNewCategory] = useState('')
//   const [taskArray, setTaskArray] = useState(TASKS)


//   // const tasks = TASKS

//   // tasks.push()

//   function onTaskFormSubmit(e) {
//     e.preventDefault()
//    const obj = {
//      text: details,
//      category: newCategory
//    }
//   //  use spread operator to add obj to taskarray and update taskarray state
//   setTaskArray([...taskArray, obj])
//   console.log("its tteh value", e.target.value)
//   }

//   console.log(TASKS)

//   // console.log("dsfgdsfgdas", setCategoryFilterClicked)



//   // console.log('here it is agains', CATEGORIES)
//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter categories={CATEGORIES} categoryFilterClicked={categoryFilterClicked} setCategoryFilterClicked={setCategoryFilterClicked}/>
//       <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES} details={details} setDetails={setDetails} newCategory={newCategory} setNewCategory={setNewCategory}/>
//       <TaskList tasks={taskArray} categoryFilterClicked={categoryFilterClicked}/>
//     </div>
//   );
// }

// export default App;




// setcategorys([...categorys, e.target.value])
// console.log('valueee', e.target.value)
// const clickedArray = [...clickedArray, e.target.value]
// console.log("the button", e.target.value)
// console.log("buttons that wree clicked", clickedButtons)
// setClickedButtons(TASKS.filter(task => {
  // if clickedButtons.includes(task.category)
  // if clickedButtons.includes("All")
//   if (clickedArray.includes("All")) {
//     return true;
//   } else if (clickedArray.includes(task.category)) {
//     return true;
//   }
// }))
// TASKS.filter(task =>
//   {if (clickedButtons.includes("All")) {
//     return true;
//   } else if (clickedButtons.includes(task.category)) {
//     return true
//   }}
// )
// console.log("buttonie", clickedButtons)
