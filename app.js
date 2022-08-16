function post() {
    var textArea = document.getElementById("text_area");
    var list = document.getElementById("list");
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    list.className += " list_class"
    li.innerHTML = textArea.value;
    ul.appendChild(li);
    list.appendChild(ul);
    textArea.value = "";
    var btn = document.createElement("button");
    btn.innerHTML = "X";
    li.appendChild(btn);
    btn.className = "delete_button"
    btn.setAttribute("onclick", "deleteItem(event)")
}
function deleteItem(event){
    var li = event.target.parentElement;
    var ul = li.parentElement;
    var list = ul.parentElement;
    list.removeChild(ul);
}