let pList = document.querySelector(".parent-list");
let forms = document.querySelector(".forms");
let uform = document.querySelector(".update-form");
let input1 = document.querySelector(".input-1");
let input2 = document.querySelector(".input-2");
let formSubmittedData = [];
let items = [];

let currentFormItem = -1;

const handleSubmit = (event) => {
  event.preventDefault();
  if (input1.value.length <= 0 || input2.value.length <= 0) {
    console.log(input1.value.length);
    alert("add details in both the field");
  } else {
    let formData = new FormData(event.currentTarget);
    let obj = {
      title: formData.get("title"),
      desc: formData.get("desc"),
    };

    formSubmittedData.unshift(obj);
    items = [];
    console.log("form-submitted");

    pList.innerHTML = "";
    formSubmittedData.forEach((data, index) => {
      let list = document.createElement("li");
      list.classList.add("nodeList");

      list.innerHTML = `<p><span class="title">${data.title}</span><span class="description">${data.desc}</span><button class="edit">Edit</button><button class="done">done</button><button class="delete">delete</button></p>`;
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
    // done(nodeListdone , modify1, modify2, formSubmittedData, nodeList, pList)
    deleteList(nodeListdel, formSubmittedData, nodeList, pList);
    console.log(formSubmittedData);
  }
};
function edit(nodeListedit, modify1, modify2) {
  nodeListedit.forEach((listedit, index) => {
    listedit.addEventListener("click", () => {
      currentFormItem = index;
      listedit.style.backgroundColor = "purple";
      modify1.value = "Edit";
      modify2.value = "Here";
    });
  });
}

// function done(nodeListdone, modify1, modify2, formSubmittedData, nodeList, pList){
//     nodeListdone.forEach((listdone, index) => {
//         console.log(index);
//         listdone.addEventListener("click",() => {
//             listdone.style.backgroundColor = "purple";
//             formSubmittedData.splice(index, 1, obj)

//             // triggerFormSubmit('action1', nodeList, index);
//             console.log("After-Edited :" + formSubmittedData);
//         })
//     })
// }

function deleteList(nodeListdel, formSubmittedData, nodeList, pList) {
  nodeListdel.forEach((listdel, index) => {
    listdel.addEventListener("click", () => {
      listdel.style.backgroundColor = "purple";
      formSubmittedData.splice(index, 1);
      triggerFormSubmit("action1");
      console.log("After-Deleted :" + formSubmittedData + "index :" + index);
      // pList.removeChild(nodeList[index])
    });
  });
}

forms.addEventListener("submit", handleSubmit);

const updateSubmit = (event) => {
  if (currentFormItem >= 0) {
    event.preventDefault();
    // event.stopPropagation();
    let formData = new FormData(event.currentTarget);
    formSubmittedData[currentFormItem].title = formData.get("mtitle");
    formSubmittedData[currentFormItem].desc = formData.get("mdesc");
    let obj = {
      title: formData.get("mtitle"),
      desc: formData.get("mdesc"),
    };

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
  } else {
    throw new Error("No current item selected!");
  }
};

uform.addEventListener("submit", updateSubmit);

document.getElementById("httpSubmit").addEventListener("click", (e) => {
  e.preventDefault;
  console.log("updated data" + formSubmittedData);
});
