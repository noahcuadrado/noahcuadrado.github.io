function changeBackground(){
    //añade o quita al html <body> la clase "dark" (<body class="dark">)
    document.body.classList.toggle("dark");
    //añade o quita al boton id="light-button" la clase lightcolor (esto es una excepcion para cuando estoy sobre el boton de "dark" me cambie el color de letra del boton de "light")
    document.getElementById("light-button").classList.toggle("lightcolor");
}
function themSelected(theme){
    //oculta el selector de dark o light (d-none es una clase que solo pone display:none)
    document.getElementById("theme_selector").classList.add("d-none");
    //muestra la pagina principal quitando la clase "d-none"
    document.getElementById("main_page").classList.remove("d-none");
    //pone la cookie para recordar que el tema seleccionado es dark o light
    setCookie("theme", theme, 30);
}

//setea una cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//lee una cookie
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
    //revisa si ya hay un tema seleccionado
    let theme = getCookie('theme');
    if(theme !== undefined && theme !== "")
    {
        //si el tema seleccionado es dark le pone la clase al body para que se aplique el css correspondiente 
        if(theme === "dark")
            document.body.classList.add("dark");
        //oculta la pagina de seleccion de tema y muestra la principal
        themSelected(theme);
    }
});