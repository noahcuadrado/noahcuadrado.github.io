import { React, useEffect, useState } from 'react';

function ThemSelector() {
  const [theme, setTheme] = useState(getCookie('theme'));
  const [themeSelected, setThemeSelected] = useState(false);

  function changeBackground(on) {
    if (on)
      setTheme("dark");
    else
      setTheme("light");
  }
  function selectTheme(theme) {
    setTheme(theme);
    setThemeSelected(true);
    setCookie("theme", theme, 30);
  }
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "light";
  }
  useEffect(() => {
    let themec = getCookie('theme');
    if (themec !== undefined && themec !== "") {
      selectTheme(themec);
    } else {
      selectTheme("light");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <div id="theme_selector" className='dark d-none'>
        <div className="vertical_center">
        <div className="column column-1">
            <div className="flex">
            <button id="light-button" className="button light" onClick={() => selectTheme('light')}>light.</button>
            </div>
        </div>
        <div className="column column-2">
            <div className="flex">
            <button className="button dark" onMouseEnter={() => changeBackground(true)} onMouseLeave={() => changeBackground(false)} onClick={() => selectTheme('dark')}>dark.</button>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Body;
