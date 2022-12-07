import userdata from "./data.mjs";

const organizeData = userdata.map((ele) => {
  const list_Id = document.getElementById("list_names");

  //const li = document.createElement("li");

  //varWapper warp what needs to be inside the map methode
  let varWarpper_1 = ele.name.first +" "+ ele.name.last;
  let varWrapper_2 = new Date(
    ele.dob.date.slice(0, ele.dob.date.indexOf("T"))
  ).toDateString();
  list_Id.innerHTML += `<ul><li>full name: ${varWarpper_1}</li> <li>birthday: ${varWrapper_2}</li></ul>
    
  `;
  return {
    fullName: varWarpper_1,
    birthday: varWrapper_2,
  };
});

console.log(organizeData);

// {
//     fullName: "Levent Busser",
//     birthday: "Fri Aug 20 1971"
// }

// Read about toDateString() for info on formatting a readable date.

// */
// function transformData(data){

// }

// console.log(transformData(userData));
