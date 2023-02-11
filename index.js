function changeBackground(){
    document.body.classList.toggle("dark");
    document.getElementById("light-button").classList.toggle("lightcolor");
}
function themSelected(theme){
    document.getElementById("theme_selector").classList.add("d-none");
    document.getElementById("main_page").classList.remove("d-none");

    setCookie("theme", theme, 30);
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}


document.addEventListener("DOMContentLoaded", function(event) {
    let theme = getCookie('theme');
    if(theme !== undefined && theme !== "")
    {
        if(theme === "dark")
            document.body.classList.add("dark");
        themSelected(theme);
    }
});