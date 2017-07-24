import React from "react";
import { render } from "react-dom";
import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";
import App from "./app.jsx";
render(
  <UWPThemeProvider
    theme={getTheme({
      themeName: "dark", // set custom theme
      accent: "#0078D7", // set accent color
      useFluentDesign: true, // sure you want use new fluent design.
      desktopBackgroundImage:"https://www.react-uwp.com/HEAD/static/images/jennifer-bailey-10753.1DE91.jpg" // set global desktop background image
    })}
  >
    <App />
  </UWPThemeProvider>,
  document.querySelector("#app")
);
