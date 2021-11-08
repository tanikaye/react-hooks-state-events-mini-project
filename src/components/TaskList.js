import React from "react";
import Task from "./Task"

function TaskList({newArray, updatedTasks}) {
  return (
    <div className="tasks">
      {updatedTasks.map((task, ix) => <Task categoryProperty={task.category} taskProperty={task.text} key={ix}/>)}
    </div>
  );
}

export default TaskList;





















// import React from "react";
// import Task from "./Task"


// function TaskList({tasks, categoryFilterClicked}) {


//   const clickedTasks = tasks.filter(task => {if (categoryFilterClicked === "All")  {
//    return true;
//   } else if (task.category === categoryFilterClicked) {
//     return true;
//   }}
//   )

//   return (
//     <div className="tasks">
//       {clickedTasks.map((task, ix) => <Task text={task.text} category={task.category} key={ix}/>)}
//     </div>
//   );
// }

// export default TaskList;
