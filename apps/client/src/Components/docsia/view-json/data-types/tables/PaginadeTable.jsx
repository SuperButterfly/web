import React, { useEffect, useState } from "react";

const PaginadeTable = ({ page, data, size, handlepage }) => {
  const handle = (pageNumber) => {
    handlepage(pageNumber);
  };
useEffect(()=>{

},[data])

  return (
    <div>
      {size &&data&&
        size.map((_, index) => {
            return (
              <div
                key={index}
                onClick={() =>  handle(index)}
                style={{
                  cursor: "pointer",
               
                }}
              >
                {index+1}
              </div>
            );
         
        })}
    </div>
  );
};

export default PaginadeTable;
