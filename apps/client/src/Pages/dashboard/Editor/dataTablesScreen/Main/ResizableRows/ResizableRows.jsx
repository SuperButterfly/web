import React from "react";

export default function ResizableRow({ height, onMouseDown, children }) {
    /* const handleMouseDown = (e) => {
      e.stopPropagation();
      onMouseDown(e);
    }; */
  
    const handleCellMouseDown = (e) => {
      const boundingRect = e.target.getBoundingClientRect();
      const y = e.clientY - boundingRect.top;
      const bottomMargin = 12; // Adjust this value to set the margin from the bottom
  
      if (y >= boundingRect.height - bottomMargin) {
        // Activate the row resize only if the cursor is close to the bottom edge
        e.stopPropagation();
        onMouseDown(e);
      }
    };
  
    return (
      <tr style={{ height: `${height}px` }}>
        {React.Children.map(children, (child, index) => {
          if (index === 0) {
            return React.cloneElement(child, {
              onMouseDown: handleCellMouseDown,
              style: { cursor: "row-resize" },
            });
          } else {
            return child;
          }
        })}
      </tr>
    );
  };