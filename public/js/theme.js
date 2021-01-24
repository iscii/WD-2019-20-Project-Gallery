function inittheme() {
    let theme = localStorage.getItem("theme");
    if (theme) setTheme(theme);
    document.getElementById("themeswitch").getElementsByTagName("input")[0].checked = theme == "light";
}
function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
}
function toggleTheme() {
    let theme = document.documentElement.classList[0] == "dark" ? "light" : "dark";
    setTheme(theme);
}