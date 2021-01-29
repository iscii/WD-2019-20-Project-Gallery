const LEVELDESC = ["Level 1 desc", "Level 2 desc", "Level 3 desc", "Level 4 desc", "Level 5 desc", "Level 6 desc", "Level 7 desc"];

function init() {

}

function loadLevel(level) {
    let content = document.getElementById("content");
    var obj = document.createElement("object");
    obj.type = "text/html";
    obj.data = "Web Development/Level " + level + "/index.html";
    obj.className += "levelcontent";
    content.replaceChild(obj, content.lastChild);
    document.getElementById("content-desc").innerHTML = "Level " + level + "\n" + LEVELDESC[level - 1];;
}