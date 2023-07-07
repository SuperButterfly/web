import React, { useEffect } from "react";

export default function Main2() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log("Key pressed:", event.key);
    };

    document.addEventListener("keydown", handleKeyDown);

    // Cleanup: Remover el event listener al desmontar el componente
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return <div>Main2</div>;
}
