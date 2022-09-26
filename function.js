function newElement (){
    var item = document.getElementById("myInput").value;
    var text=document.createTextNode(item)
    var list =document.createElement("li");
    list.appendChild(text);
    document.getElementById("listItems").appendChild(list);
}
