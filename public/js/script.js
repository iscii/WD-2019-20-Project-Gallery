window.onload = () => {
    let theme = localStorage.getItem("theme");
    if (theme) 
        setTheme(theme);
    else 
        setTheme("dark");
}
function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
}
function toggleTheme() {
    let theme = localStorage.getItem("theme") == "dark" ? "light" : "dark";
    setTheme(theme);
}