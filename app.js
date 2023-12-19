let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.createElement("ul"); // ol:= order List.

let body = document.querySelector("body").appendChild(ul);
ul.innerText = "To Do List Display";

//===============================================//
// let li = document.createElement("li");
// ul.appendChild(li);

// btn.addEventListener("click", function () {
//   li.innerText = inp.value;
//   inp.value = "";
// });
//===============================================//
btn.classList.add("btnbg");
btn.addEventListener("click", function () {
  console.log(inp.value);
  let item = document.createElement("li");
  ul.appendChild(item);
  item.innerText = inp.value;

  inp.value = ""; // reset the empty string

  let delbtn = document.createElement("button");

  delbtn.innerText = "delete";
  console.dir(delbtn.innerText);
  item.append(delbtn);
  delbtn.classList.add("del");

  // delbtn.addEventListener("click", function () {
  //   item.remove();
  // });
});

ul.addEventListener("click", function (event) {
  console.dir(event.target.nodeName); // optinal line
  //console.dir(event.target.tagName);

  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});
// Event Delegation := we want to used  present element event listner in new element then event delegation is used.
