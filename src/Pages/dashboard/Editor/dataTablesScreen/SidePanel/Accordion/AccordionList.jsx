import React, { useState } from "react";
import styles from "./accordion.module.css";
import AccordionItem from "./AccordionItem";
const AccordionList = ({ accordions }) => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const headerClick = (index) => {
    setActiveAccordion((prevActiveAccordion) =>
      prevActiveAccordion === index ? -1 : index
    );
  };

  const accordionElements = accordions.map((item, index) => (
    <AccordionItem
      key={item.title}
      title={item.title}
      accordion={item}
      isOpen={activeAccordion === index}
      onHeaderClick={() => headerClick(index)}
    >
      {item.component}
    </AccordionItem>
  ));

  return <div className={styles.accordionList}>{accordionElements}</div>;
};

export default AccordionList;
