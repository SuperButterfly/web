import React, { useState } from "react";
import ColorPicker, { useColorPicker } from "react-best-gradient-color-picker";
import styles from "../ColorStyleCss/Gradient.modules.css";

const GradientColorPicker = () => {
  const [color, setColor] = useState("rgba(255, 255, 255, 1)");
  const { valueToHex, getGradientObject } = useColorPicker(color, setColor);

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleHexButtonClick = () => {
    const hexColor = valueToHex();
    console.log(hexColor);
  };

  const handleGetGradientObjectButtonClick = () => {
    const gradientObject = getGradientObject();
    console.log(gradientObject);
  };

  return (
    <div className={styles.panelContain}>
      <ColorPicker value={color} onChange={handleColorChange} />
    </div>
  );
};

export default GradientColorPicker;
