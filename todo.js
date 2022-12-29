//elements
const task = document.getElementById('task');



//theme
document.querySelector(".icons").addEventListener("click", ()=>{ 
  document.querySelector(".light-logo").classList.toggle("animate-light"); 
  document.querySelector(".dark-logo").classList.toggle("animate-dark"); 
  document.querySelector(".container").classList.toggle("lightBackground"); 
});

//classes

const CHECK= "bi-check-circle-fill check";
const UNCHECK =  "bi bi-circle";
const LINE_THROUGH="lineThrough";

//variables

let LIST,id;
//get data from local storage
let data = localStorage.getItem("TODO");

//check if data is not empty
if (data){
  LIST=JSON.parse (data);
  id= LIST.length;
  loadList(LIST);
}else{
  //if data isnt empty
  //when the application is loaded for the first time
  LIST=[];
  id=0;
};
//load list to user interface
function loadList(array){
  array.foreach(function (item){
    addToDo(item.name, item.id,item.done, item.trash);
})
};

//adds todo to the list

function addToDo(toDo, id, done, trash ){

  if(trash){return;}

  const DONE=done? CHECK : UNCHECK;
  const LINE= done? LINE_THROUGH : "";

  const text = `<li class= "item">
                    <i class="${DONE}" job="complete" id="${id}"></i>
                    <p class="text ${LINE}" >${toDo}</p>
                    <i class="bi bi-trash3" job="delete" id ="${id}"></i>
                </li>`;
                

    const position ="beforeend";

    list.insertAdjacentHTML(position,text);     
}; 

// append item on clicking the add button

 function appendToDo(){
  const toDo=task.value;
  if(toDo){
    addToDo(toDo , id,false, false);
    LIST.push({
      name:toDo,
      id:id,
      done:false,
      trash:false
    });
    //add Item to local storage
    localStorage.setItem("TODO", JSON.stringify(LIST));
    id++;
  }
  task.value="";

 };

 //append item on clicking the enter key
 document.addEventListener("keyup",function (event){
  if(event.keyCode==13){
    const toDo=task.value;
    if(toDo){
      addToDo(toDo, id,false, false);
      LIST.push({
        name:toDo,
        id:id,
        done:false,
        trash:false
      });
      //add Item to local storage
    localStorage.setItem("TODO", JSON.stringify(LIST));
      id++;
    }
    task.value="";
  }
 });

 //complete  to do

function completeToDo (element){
  element.classList.toggle(CHECK),
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classlist.toggle(LINE_THROUGH);

  LIST[element.id].done =  LIST[element.id].done ? false :true;
}
 
//remove from the todo

function removerToDo(element){
  element.parentNode.parentNode.removeChild(element.parentNode);

  LIST[element.id].trash=true;
 };


 //complete or incomplete

 //const items = document.getElementById('toDoItems');
 const list = document.getElementById('toDoItems');
 list.addEventListener("click", function(event){
  const element= event.target;
  const elementTask= element.attributes.job.value;

  if(elementTask=="complete"){
    completeToDo(element);
  }else if(elementTask=="delete"){
    removerToDo(element);
  }
  //add Item to local storage and update list
localStorage.setItem("TODO", JSON.stringify(LIST));


 });
