function newElement (){
    var item = document.getElementById("myInput").value;
    var text=document.createTextNode(item)
    var list =document.createElement("li");
    list.appendChild(text);
    document.getElementById("listItems").appendChild(list);
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
