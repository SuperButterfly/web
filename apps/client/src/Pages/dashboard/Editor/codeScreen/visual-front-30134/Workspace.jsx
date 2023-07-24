import React from 'react';
import styles from './Workspace.module.css';
import logoAythen from "./icons/logoAythen.png";
import { initialNodes} from './nodes.js';


function Workspace({ handleShapeClick }) {
  const nodesForExcel = initialNodes.filter(node => node.type === 'excel');
  const nodesForGmail = initialNodes.filter(node => node.type === 'gmail');
  const nodesForTrello = initialNodes.filter(node => node.type === 'trello');
  const nodesForSlack = initialNodes.filter(node => node.type === 'slack');
  const nodesForAythen = initialNodes.filter(node => node.type === 'aythen');

  return (
    <div className={styles.workspace}>
      <div className={styles.containerTitle}>
        <svg className={styles.iconSetting}></svg>
        <h2 className={styles.workspaceTitle}>Setting</h2>
      </div>
      <div className={styles.workspaceIcons}>
        <div className={styles.shape} onClick={() => handleShapeClick(nodesForAythen)}>
          <img className={styles.logoAythen} src={logoAythen} alt="Aythen"></img>
        </div>
        <h5 className={styles.iconTitle}>Aythen</h5>
        <div className={styles.shape} onClick={() => handleShapeClick(nodesForSlack)}>
          <svg className={styles.iconSlack} alt="Slack"></svg>
        </div>
        <h5 className={styles.iconTitle}>Slack</h5>
        <div className={styles.shape} onClick={() => handleShapeClick(nodesForTrello)}>
          <svg className={styles.iconTrello} alt="Trello"></svg>
        </div>
        <h5 className={styles.iconTitle}>Trello</h5>
        <div className={styles.shape} onClick={() => handleShapeClick(nodesForGmail)}>
          <svg className={styles.iconGmail} alt="Gmail"></svg>
        </div>
        <h5 className={styles.iconTitle}>Gmail</h5>
        <div className={styles.shape} onClick={() => handleShapeClick(nodesForExcel)}>
          <svg className={styles.iconExcel} alt="Excel"></svg>
        </div>
        <h5 className={styles.iconTitle}>Excel</h5>
      </div>
    </div>
  );
}

export default Workspace;