import React from "react";

function NewTaskForm({categories, details, setDetails, newCategory, setNewCategory, onTaskFormSubmit}) {
console.log("heres teh categfiresi", categories)


function updateDetails (e) {
  setDetails(e.target.value)
  console.log(details)
}

function updateCategory(e) {
  setNewCategory(e.target.value)
  console.log(newCategory)
}



  return (
    <form className="new-task-form" onSubmit={(e) => onTaskFormSubmit(e)}>
      <label>
        Details
        <input type="text" name="text" onChange={updateDetails}/>
      </label>
      <label>
        Category
        <select name="category" onChange={updateCategory}>
          {categories.map((category, ix) => {
            if (category !== "All") {
              return <option key={ix}>{category}</option>
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
