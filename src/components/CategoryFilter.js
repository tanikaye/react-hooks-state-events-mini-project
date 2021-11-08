import React from "react";

function CategoryFilter({categories, handleClassAndFilter}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, ix) => <button value={category} key={ix} onClick={handleClassAndFilter}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;





















// import React from "react";

// function CategoryFilter({categories, categoryFilterClicked, setCategoryFilterClicked}) {
//   // console.log("props obj againnnn", setCategoryFilterClicked)

//   function addClassByClick(e){
//     (e.target).classList.add("selected")
//     console.log("here is the value", e.target.value)
//     setCategoryFilterClicked(e.target.value)
//   }

//   // categories.filter(make a new array of all the stuff wit ha category of the new state)
//   // categories


//   return (
//     <div className="categories">
//       <h5>Categor filters</h5>
//       {categories.map((category, ix) => {
//         // we need state to be diff in  each button,
//         // bc when a button is clicked, we want state to be true,
//         // and when it is not clicked state should be false.
//         // perhaps when we map over this we can add state based on being clicked...
//         return <button value={category} onClick={addClassByClick} key={ix}>{category}</button>
//       })}
//     </div>
//   );
// }

// export default CategoryFilter;
