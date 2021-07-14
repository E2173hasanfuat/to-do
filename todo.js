// tum elementler secme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListener();

function eventListener(){//tum eevent listenerleri
    form.addEventListener("submit",addTodo);
}
function addTodo(e){
    const newTodo = todoInput.value.trim();

    if (newTodo === ""){
        // <div class="alert alert-danger" role="alert">
        //             A simple danger alert—check it out!
        //         </div>
    
        showAlert("danger", "pls enter a todo");
    }
    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","basariyla todo eklendi");
    }
        
    e.preventDefault();
}
function getTodosFromStorage(newTodo){//storagedan todolari alma
    let todos;

    if(localStorage.getItem("todos")===null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));


}
function showAlert(type,message){
    const alert = document.createElement("div");

    alert.className = `alert alert-${type} `; 

    alert.textContent = message;

    firstCardBody.appendChild(alert);

    

    //setTimeout

    setTimeout(function(){
        alert.remove();
    },1000);







}
function addTodoToUI(newTodo){
    //string degerini list item olarak UI yi ekleyecek
// <!-- <li class="list-group-item d-flex justify-content-between">
// Todo 1
// <a href = "#" class ="delete-item">
//     <i class = "fa fa-remove"></i>
// </a>

// </li>-->

//list item olusturma
const listItem = document.createElement("li");
//link olusturma
const link = document.createElement("a");
link.href = "#";
link.className = "delete-item";
link.innerHTML = "<i class = 'fa fa-remove'></i>";

listItem.className = "list-group-item d-flex justify-content-between"

//Text  Node ekleme

listItem.appendChild(document.createTextNode(newTodo));
listItem.appendChild(link);

//Todo List'e LIst Item i ekleme

todoList.appendChild(listItem);
todoInput.value = "";


console.log(listItem);
}