import { useState } from "react";
import Table from "../../Editor/tables/Components/Spreadsheet/SpreadSheet.js"; // "../../Editor/tables/Components/Spreadsheet/SpreadSheet.js";
// import Header from "../header/Header.js";
// import FieldForm from "../fields/FieldForm";
// import Fields from "../fields/Fields.js";
// import "./main.css";

const Main = () => {
  const [tableTitle, setTableTitle] = useState("");

  const handleFormSubmit = (title) => {
    setTableTitle(title);
  };

  return (
    <div className="data-manager-main-container">
      {/*<Header />
       */}
      <div className="data-manager-main-container1">
        <Table tableTitle={tableTitle} />
        {/*<FieldForm onSubmit={handleFormSubmit} />*/}
      </div>
    </div>
  );
};

export default Main;
