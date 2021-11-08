import React from "react";

function Task({taskProperty, categoryProperty}) {

  function handleDelete(e) {
e.target.parentNode.remove()
  }

  return (
    <div className="task">
      <div className="label">{taskProperty}</div>
      <div className="text">{categoryProperty}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;























// import React from "react";


// function Task({text, category}) {
//   function handleDelete(e) {
//     e.target.parentNode.remove()
//     }
//   return (
//     <div className="task">
//       <div className="label">{category}</div>
//       <div className="text">{text}</div>
//       <button className="delete" onClick={handleDelete}>X</button>
//     </div>
//   );
// }

// export default Task;
