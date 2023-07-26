import React, { useState, useEffect } from 'react';
import style from './FrameworksOp.module.css';
import axios from "axios";

export default function Backend({ id }) {
  const [infoFramework, setInfoFramework] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get(`/frameworks/back/${id}`);
      setInfoFramework(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div>
    {infoFramework && (
      <>
        <h1 className={style.infotitle}>{infoFramework.name}</h1>
        <p  className={style.features}>Website: <a href={infoFramework.website} target="_blank" rel="noopener noreferrer">{infoFramework.website}</a></p>
        <p  className={style.features}>Release Date: {infoFramework.releaseDate}</p>
        <h2  className={style.infotitle}>Key Features:</h2>
        {infoFramework.keyFeatures ? (
          <ul>
            {infoFramework.keyFeatures.map((feature, index) => (
              <li key={index} className={style.features}>{feature}</li>
            ))}
          </ul>
        ) : (
          <p>No key features available.</p>
        )}
        <p className={style.features} >Popularity: {infoFramework.popularity}</p>
        <p className={style.features}>Created At: {infoFramework.createdAt}</p>
        <p className={style.features}>Updated At: {infoFramework.updatedAt}</p>
      </>
    )}
  </div>
  );
}
