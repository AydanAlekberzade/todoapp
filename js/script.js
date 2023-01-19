const input = document.querySelector('input');
const btn = document.querySelector('button');
const todo = document.querySelector('.todo');
const dtbn = document.querySelector('.delete')
var taskList;
var localdata = localStorage.getItem('localItem');
var localItems = JSON.parse(localdata);


btn.onclick=()=>{
  if (localItems === null) {
    taskList = [];
  }else{
    taskList = localItems;
  }
  taskList.push(input.value);
  localStorage.setItem('localItem',JSON.stringify(taskList));
  input.value = "";
ShowList();

}

const ShowList = ()=>{
    let outPut = "";
    if (localItems === null) {
        taskList = [];
    }else{
        taskList = localItems;
    }
    taskList.forEach(element => {
        outPut +=`<li>${element}<button>delete</button></li>`
    });
    todo.innerHTML = outPut
}
ShowList();

dtbn.onclick=function(){
 
  localStorage.clear();
}


// dtbn.addEventListener("click", (e) => {
//   if (e.target.classList.contains("delete")) {

//     deleteTaskWith(e.target.parentElement.getAttribute("li"));
//     e.target.parentElement.remove();

//     // localsdeleete
  


//   }
// })

// function deleteTaskWith(taskId) {
//   // for (let i = 0; i  < arrayOfTasks.length; i++) {
//   //  console.log(`${arrayOfTasks[i].id} === ${taskId}`)
    
//   // }
//   arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
//   addDataToLocalStorageFrom(arrayOfTasks);
// }