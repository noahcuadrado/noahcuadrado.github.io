function changeLightMode() {
    document.body.classList.toggle("dark");
    document.getElementById("lightmodename").innerText =  document.body.classList.contains("dark") ? "Dark mode" : "Light mode";
}