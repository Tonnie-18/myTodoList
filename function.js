// function newElement (){
//     var item = document.getElementById("myInput").value;
//     var text=document.createTextNode(item)
//     var list =document.createElement("li");
//     list.appendChild(text);
//     document.getElementById("listItems").appendChild(list);
// }

// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }
var row = 0;
function newElement (){
    var item = document.getElementById("myInput").value;
    var text=document.createTextNode(item)
    var list =document.createElement("li");
    list.appendChild(text);
    list.setAttribute("id","contentP"+row);
    document.getElementById("listItems").appendChild(list);

    var removeTask = document.createElement("input");
    removeTask.setAttribute("type", "button");
    removeTask.setAttribute("value", "Remove");
    removeTask.setAttribute("id", "removeButton");
    removeTask.setAttribute("onClick", "deleterow("+ row +");");
    list.appendChild(removeTask);
    row++;
}


function deleterow(ID){
    document.getElementById('contentP'+ID).remove();
}


var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}