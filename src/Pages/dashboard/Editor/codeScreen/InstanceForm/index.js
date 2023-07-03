import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postInstance } from '@/redux/actions/instances';
import styles from './InstanceForm.modules.css';

const InstanceForm = ({ idTemplate }) => {
  const dispatch = useDispatch();
  const [instanceName, setInstanceName] = useState('');


  const handleName = (e) => {
    const { value } = e.target;
    setInstanceName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(instanceName, idTemplate);
    dispatch(postInstance(idTemplate, instanceName));
    // setToggleForm();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
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
