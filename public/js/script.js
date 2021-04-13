const LEVELDESC = ["Level 1 desc", "Level 2 desc", "Level 3 desc", "Level 4 desc", "Level 5 desc", "Level 6 desc", "Level 7 desc"];

function init() {

}

function displayContent(cat) {
    let content = document.getElementById("content");
    switch (cat){
        case "links":
            document.getElementById("content-desc").innerHTML = "Links";
            if(content.lastChild) content.removeChild(content.lastChild);
        break;
        case "webdev":
            document.getElementById("content-desc").innerHTML = "Web Development";
            if(content.lastChild) content.removeChild(content.lastChild);
        break;
        case 'games':
            document.getElementById("content-desc").innerHTML = "Games";
            if(content.lastChild) content.removeChild(content.lastChild);
        break;
    }
}

function displayLevel(level) {
    document.getElementById("content-desc").innerHTML = "Level " + level + "\n" + LEVELDESC[level - 1];
    let content = document.getElementById("content");
    var obj = document.createElement("object");
    obj.type = "text/html";
    obj.data = "Web Development/Level " + level + "/index.html";
    obj.className += "levelContent";
    if(content.lastChild)  
        return content.replaceChild(obj, content.lastChild);
    content.appendChild(obj);
}

function dropDown(catEl) {
    let items = catEl.parentElement.children[1].classList;
    if(items.contains("cat-expanded"))
        return items.remove("cat-expanded");
    items.add("cat-expanded");
}
