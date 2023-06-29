import React from 'react'
import styles from './accordion.module.css';

function AccordionItem({ children, title, onHeaderClick, isOpen }) {
    return (
        <div className={`${styles.accordion__item} ${styles.accordionPart}`}>
            <div
                className={`${styles.accordionPartHeader} ${isOpen ? styles.accordionPartHeaderOpened : ''}`}
                onClick={onHeaderClick}
            >
                {title}
            </div>
            {isOpen && (
                <div className={styles.accordionPartBody}>
                    {children}
                </div>
            )}
        </div>
    );
}

export default AccordionItem