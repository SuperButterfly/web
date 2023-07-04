import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postInstance } from '@/redux/actions/instances';
import styles from './InstanceForm.module.css';

const InstanceForm = ({ idTemplate, closeForm }) => {
  const dispatch = useDispatch();
  const [instanceName, setInstanceName] = useState('');


  const handleName = (e) => {
    const { value } = e.target;
    setInstanceName(value);
    // console.log(instanceName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postInstance(idTemplate, instanceName));
    console.log(instanceName);
    closeForm();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={closeForm}>X</button>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>Instance name</label>
          <input type="text" onChange={handleName} value={instanceName} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default InstanceForm;
