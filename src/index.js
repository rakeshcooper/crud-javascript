let ubtn = document.querySelector(".btn");
let ucon = document.querySelector(".uf-conatiner");
let pList = document.querySelector(".parent-list");
let forms = document.querySelector(".forms");
let uform = document.querySelector(".update-form");
let input1 = document.querySelector(".input-1");
let input2 = document.querySelector(".input-2");
let formSubmittedData = JSON.parse(localStorage.getItem("Data") ?? "[]")
let items = [];
let newData = []
render(formSubmittedData);


let currentFormItem = -1;

const handleSubmit = (event) => {
  event.preventDefault();
  if (input1.value.length <= 0 || input2.value.length <= 0) {
    console.log(input1.value.length);
    alert("add details in both the field");
  } else {
    let formData = Object.fromEntries(new FormData(event.currentTarget));
    // formData["isDone"] = false;
    // let obj = {
    //   title: formData.get("title"),
    //   desc: formData.get("desc"),
    //   isDone: false
    // };

    formSubmittedData.unshift(formData);
    newData.unshift(formData)
    items = [];
    console.log("form-submitted");
    render(formSubmittedData);
    
  }
};

function render(formSubmittedData){
  pList.innerHTML = "";
  formSubmittedData.forEach((data, index) => {
    let list = document.createElement("li");
    list.classList.add("nodeList");
    list.innerHTML = `<p style = "${data.isDone && "text-decoration: line-through"}"><span class="title">${data.title}</span><span class="description">${data.desc}</span><button class="edit">Edit</button><input class="done" type="checkbox" ${data.isDone ? `checked` : ``}><button class="delete">delete</button></p>`;
    pList.appendChild(list);
    items.push(list);
  });

  let nodeList = document.querySelectorAll(".nodeList");
  let nodeListedit = document.querySelectorAll(".nodeList .edit");
  let nodeListdone = document.querySelectorAll(".nodeList .done");
  let nodeListdel = document.querySelectorAll(".nodeList .delete");
  let modify1 = document.querySelector(".modify-1");
  let modify2 = document.querySelector(".modify-2");
  edit(nodeListedit, modify1, modify2);
  done(nodeListdone, nodeList, newData);
  deleteList(nodeListdel, formSubmittedData, nodeList, pList);
  console.log(formSubmittedData);
  localStorage.setItem("Data",JSON.stringify(formSubmittedData))
}

function edit(nodeListedit, modify1, modify2) {
  nodeListedit.forEach((listedit, index) => {
    listedit.addEventListener("click", () => {
      console.log(uform);
      currentFormItem = index;
      listedit.style.backgroundColor = "purple";
      modify1.value = formSubmittedData[index].title;
      modify2.value = formSubmittedData[index].desc;
      uform.classList.add("u-show")
      ucon.classList.add("u-popup");
    });
  });
}


function done(nodeListdone, nodeList, newData) {
  nodeListdone.forEach((listDone, index) => {
    listDone.addEventListener('change',(e)=>{
      // let isDone = formSubmittedData[index]["isDone"]
      console.log(e.target.checked);
      console.log(formSubmittedData[index].isDone);
      formSubmittedData[index]["isDone"] = !e.target.checked;
      if(e.target.checked){
        formSubmittedData[index].isDone = true  
        listDone.parentElement.style.textDecoration = "line-through"     
          console.log(formSubmittedData);
        localStorage.setItem("Data",JSON.stringify(formSubmittedData))
      } else {
        formSubmittedData[index].isDone = false
        listDone.parentElement.style.textDecoration = ""
        console.log(formSubmittedData);
        localStorage.setItem("Data",JSON.stringify(formSubmittedData))
      }
      // render(formSubmittedData);
    })
  })
}




function deleteList(nodeListdel, formSubmittedData, nodeList, pList) {
  nodeListdel.forEach((listdel, index) => {
    listdel.addEventListener("click", () => {
      listdel.style.backgroundColor = "purple";
      const element = nodeList[index]
      console.log(element);
      // debugger
      formSubmittedData.splice(index, 1);
      render(formSubmittedData);
      console.log("After-Deleted :" + formSubmittedData + "index :" + index);
      
    });
  });
}



forms.addEventListener("submit", handleSubmit);

const updateSubmit = (event) => {
  if (currentFormItem >= 0) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    formSubmittedData[currentFormItem].title = formData.get("mtitle");
    formSubmittedData[currentFormItem].desc = formData.get("mdesc");
    let obj = {
      title: formData.get("mtitle"),
      desc: formData.get("mdesc"),
    };
    localStorage.setItem("Data",JSON.stringify(formSubmittedData))

    console.log(currentFormItem);

    console.log(
      "Update the item with index -> ",
      currentFormItem,
      " ",
      Date.now(),
    );

    const element = items[currentFormItem];

    const titleElement = element.querySelector(".title");
    titleElement.innerText = obj.title;

    const descriptionElement = element.querySelector(".description");
    descriptionElement.innerText = obj.desc;
    uform.classList.remove("u-show")
    ucon.classList.remove("u-popup");
  } else {
    throw new Error("No current item selected!");
    
  }
  // uform.classList.remove("u-popup");
};

uform.addEventListener("submit", updateSubmit);

document.getElementById("httpSubmit").addEventListener("click", (e) => {
  e.preventDefault;
  console.log("updated data" + formSubmittedData);
});

// ubtn.addEventListener("click", () => {
//   console.log("5");
  
// })
