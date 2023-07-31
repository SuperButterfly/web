import React from 'react';
import styles from './Workspace.module.css';
import logoAythen from "./icons/logoAythen.png";
import { initialNodes } from './nodes';
function Workspace({ handleShapeClick }) {
  const nodesForExcel = initialNodes.find(node => node.type === 'excel');
  const nodesForGmail = initialNodes.find(node => node.type === 'gmail');
  const nodesForTrello = initialNodes.find(node => node.type === 'trello');
  const nodesForSlack = initialNodes.find(node => node.type === 'slack');
  const nodesForAythen = initialNodes.find(node => node.type === 'aythen');

  return (
    <div className={styles.workspace}>
      <div className={styles.containerTitle}>
        <svg className={styles.iconSetting}></svg>
        <h2 className={styles.workspaceTitle}>Setting</h2>
      </div>
      <div className={styles.workspaceIcons}>
        {/*                                                                                                                provisional para poder generar un id Random  */}
        <div className={styles.shape} style={{cursor: 'pointer'}} onClick={() => handleShapeClick({...nodesForAythen, id: (Math.random() * 100000) + 'a'   })}>
          <img className={styles.logoAythen} src={logoAythen} alt="Aythen"></img>
        </div>
        <h5 className={styles.iconTitle}>Aythen</h5>
        {/*                                                                                provisional para poder generar un id Random  */}
        <div className={styles.shape} onClick={() => handleShapeClick({...nodesForSlack, id: (Math.random() * 100000) + 'b'  })}>
          <svg className={styles.iconSlack} alt="Slack"></svg>
        </div>
        <h5 className={styles.iconTitle}>Slack</h5>
        {/*                                                                                    provisional para poder generar un id Random  */}
        <div className={styles.shape} onClick={() => handleShapeClick({...nodesForTrello,  id: (Math.random() * 100000) + 'c' })}>
          <svg className={styles.iconTrello} alt="Trello"></svg>
        </div>
        <h5 className={styles.iconTitle}>Trello</h5>
        {/*                                                                                   provisional para poder generar un id Random  */}
        <div className={styles.shape} onClick={() => handleShapeClick({...nodesForGmail,  id: (Math.random() * 100000) + 'd' })}>
          <svg className={styles.iconGmail} alt="Gmail"></svg>
        </div>
        <h5 className={styles.iconTitle}>Gmail</h5>
        <div className={styles.shape} onClick={() => handleShapeClick({...nodesForExcel, id: (Math.random() * 100000) + 'e' })}>
          <svg className={styles.iconExcel} alt="Excel"></svg>
        </div>
        <h5 className={styles.iconTitle}>Excel</h5>
      </div>
    </div>
  );
}

export default Workspace;