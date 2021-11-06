import React from "react";
import Task from "./Task"


function TaskList({tasks, categoryFilterClicked}) {


  // const clickedTasks = tasks.filter(task => {if (categoryFilterClicked === "All")  {
  //  return true;
  // } else if (task.category === categoryFilterClicked) {
  //   return true;
  // }}
  // )

  return (
    <div className="tasks">
      {tasks.map((task, ix) => <Task text={task.text} category={task.category} key={ix}/>)}
    </div>
  );
}

export default TaskList;
