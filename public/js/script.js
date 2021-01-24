const LEVELDESC = ["Level 1 desc", "Level 2 desc", "Level 3 desc", "Level 4 desc", "Level 5 desc", "Level 6 desc", "Level 7 desc"];
const LEVELLINK = ["Level 1 link", "Level 2 link", "Level 3 link", "Level 4 link", "Level 5 link", "Level 6 link", "Level 7 link"];

function init() {

}

function loadLevel(level) {
    let content = document.getElementById("content");
    var obj = document.createElement("object");
    obj.type = "text/html";
    obj.data = "Level " + level + "/index.html";
    obj.className += "levelcontent";
    content.replaceChild(obj, content.lastChild);
    document.getElementById("content-desc").innerHTML = "Level " + level;
    document.getElementById("content-desc").innerHTML += "\n"+LEVELDESC[level - 1];
    document.getElementById("content-desc").innerHTML += "\n"+LEVELLINK[level - 1];
}