import React from "react";
import { render } from "react-dom";
import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";
import Button from "react-uwp/Button";
import { Layer, Stage, Group } from "react-konva";
import LCRect from "./elements/rect.jsx";
import LCPath from "./elements/path.jsx";
render(
  <UWPThemeProvider
    theme={getTheme({
      themeName: "dark", // set custom theme
      accent: "#0078D7", // set accent color
      useFluentDesign: true, // sure you want use new fluent design.
      desktopBackgroundImage:
        "https://www.react-uwp.com/HEAD/static/images/jennifer-bailey-10753.1DE91.jpg" // set global desktop background image
    })}
  >
    <div>
      <h1>It Works!</h1>
      This React project just works including
      <span className="redBg">
        <Button tooltip="Mini Tooltip">module</Button>
      </span>
      local styles.
      <p>Enjoy!</p>
      <Stage width={700} height={700}>
        <Layer scaleX={2.0} scaleY={2.0}>
          <LCRect />
          <LCPath />
        </Layer>
      </Stage>
    </div>
  </UWPThemeProvider>,
  document.querySelector("#app")
);
