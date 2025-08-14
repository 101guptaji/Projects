function toggleInfo(id) {
    var element = document.getElementById(id);
    if (element.style.maxHeight){
        element.style.maxHeight = null;
        element.previousElementSibling.style.background = "#ffffff";
        element.previousElementSibling.children[0].children[0].style.transform = "rotate(0deg)";
    } else {
        element.style.maxHeight = element.scrollHeight + "px";
        element.previousElementSibling.style.background = "#dddddd";
        element.previousElementSibling.children[0].children[0].style.transform = "rotate(90deg)";
    } 
}