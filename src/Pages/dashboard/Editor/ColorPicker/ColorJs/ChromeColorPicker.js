import React, { useState } from "react";
import { ChromePicker } from "react-color";

export default function App() {
  const [colorPreview, setColorPreview] = useState({
    h: 250,
    s: 0,
    l: 0.2,
    a: 1,
  });
  const [opacityBg, setOpacityBg] = useState("1");
  const [color, setColor] = useState("#333333");

  const handleChangeComplete = (data) => {
    if (data.hsl !== colorPreview) {
      setColor(data.hex);
      setColorPreview(data.hsl);
      setOpacityBg(data.hsl.a);
    }
  };

  const previewStyle = {
    background: color,
    opacity: opacityBg,
  };

  console.log(previewStyle);

  return <ChromePicker color={colorPreview} onChange={handleChangeComplete} />;
}
