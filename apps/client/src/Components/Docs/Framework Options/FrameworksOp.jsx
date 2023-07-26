import React, { useState, useEffect } from 'react';
import style from './FrameworksOp.module.css'
import axios from "axios"
import Frontend from './Frontend';
import Backend from './Backend';
import FrontendFrameworks from './FrontendFrameworks.json'
import BackendFrameworks from './BackendFrameworks.json'

const SelectionForm = () => {
  const [backFrameSelected, setBackFrameSelected] = useState(null);
  const [frontFrameSelected, setFrontFrameSelected] = useState(null);
  const [frameBack, setFrameBack] = useState([]);
  const [frameFront, setFrameFront] = useState([]);
  const [dataFront, setDataFront] = useState([]);
  const [dataBack, setDataBack] = useState([]);
  const [popularityFront, setPopularityFront] = useState(0);
  const [popularityBack, setPopularityBack] = useState(0);

  // useEffect(() => {
  //   if (frontFrameSelected && backFrameSelected) {
  //     const [percentageFront, percentageBack] = calculatePercentage(
  //       frontFrameSelected.popularity,
  //       backFrameSelected.popularity
  //     );
  //     setPopularityFront(percentageFront);
  //     setPopularityBack(percentageBack);
  //   }
  // }, [frontFrameSelected, backFrameSelected]);
  useEffect(() => {
    
    setFrameBack(BackendFrameworks.backEndFrameworks);
    setFrameFront(FrontendFrameworks.frontEndFrameworks);
  }, []);

  const infoBack = (e) => {
    const selectedId = parseInt(e.target.value); // Parse the value to an integer
    const selectedFrameworks = frameBack.filter((framework) => framework.id === selectedId);
    console.log(selectedId);
    setBackFrameSelected(selectedFrameworks[0]); // Assuming you only want the first matching framework, use selectedFrameworks[0]
    dataB(selectedFrameworks);
  };
  
  
  
  const infoFront = (e) => {
    const selectedId = parseInt(e.target.value); // Parse the value to an integer
    const selectedFrameworks = frameFront.filter((framework) => framework.id === selectedId);
    console.log(selectedId);
    setFrontFrameSelected(selectedFrameworks[0]); // Assuming you only want the first matching framework, use selectedFrameworks[0]
    dataF(selectedFrameworks);
  };
  
  
  const dataF = (frameworks) => {
    setDataFront(frameworks);
  };
  
  const dataB = (frameworks) => {
    setDataBack(frameworks);
  };
  const renderFileStructureInfo = (fileStructure) => {
    return (
      <div>
        <h2 className={style.subtitles}>File Structure</h2>
        {Object.entries(fileStructure).map(([folderName, folderContents], index) => (
          <div key={index}>
            <h3>{folderName}</h3>
            {Object.entries(folderContents).map(([fileName, fileDescription], index) => (
              <p key={index}>
                {fileName}: {fileDescription}
              </p>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  console.log(backFrameSelected);
  console.log(frontFrameSelected);

  return (
    <div className={style.boxBig}>
      <div className={style.boxOne}>
        <h1 className={style.title}>Seleccion de tecnologias</h1>
        <div className={style.boxes}>
          <div className={style.boxdiv}>
            <h2 className={style.subtitles1}>Back-End Frameworks</h2>
            <select className={style.options} onChange={infoBack}>
              {frameBack.map((framework) => (
                <option key={framework.id} value={framework.id}>{framework.name}</option>
              ))}
            </select>
            {backFrameSelected && (
               <>
               <h1 className={style.title1}>{backFrameSelected.name}</h1>
               <p  className={style.features}>Website: <a href={backFrameSelected.website} target="_blank" rel="noopener noreferrer">{backFrameSelected.website}</a></p>
               <p  className={style.features}>Release Date: {backFrameSelected.releaseDate}</p>
               <h2  className={style.title1}>Key Features:</h2>
               {backFrameSelected.keyFeatures ? (
                 <ul>
                   {backFrameSelected.keyFeatures.map((feature, index) => (
                     <li key={index} className={style.features}>{feature}</li>
                   ))}
                 </ul>
               ) : (
                 <p>No key features available.</p>
               )}
               <p className={style.features} >Popularity: {backFrameSelected.popularity}</p>
             </>
            )}
          </div>
          <div className={style.boxdiv}>
            <h2 className={style.subtitles1}>Front-End Frameworks</h2>
            <select className={style.options} onChange={infoFront}>
              {frameFront.map((framework) => (
                <option key={framework.id} value={framework.id}>{framework.name}</option>
              ))}
            </select>
            {frontFrameSelected && (
              <>
              <h1 className={style.title1}>{frontFrameSelected.name}</h1>
              <p  className={style.features}>Website: <a href={frontFrameSelected.website} target="_blank" rel="noopener noreferrer">{frontFrameSelected.website}</a></p>
              <p  className={style.features}>Release Date: {frontFrameSelected.releaseDate}</p>
              <h2  className={style.title1}>Key Features:</h2>
              {frontFrameSelected.keyFeatures ? (
                <ul>
                  {frontFrameSelected.keyFeatures.map((feature, index) => (
                    <li key={index} className={style.features}>{feature}</li>
                  ))}
                </ul>
              ) : (
                <p>No key features available.</p>
              )}
              <p className={style.features} >Popularity: {frontFrameSelected.popularity}</p>
            </>
            )}
          </div>
        </div>
      </div>
      <div className={style.menuBox}>
        <h2 className={style.menu}>Menu</h2>
        <div>
          <h2 className={style.subtitles}>Info de opciones</h2>
          {backFrameSelected && (
            <>
              <h3 className={style.infotitle} >Back-End Frameworks JSON:</h3>
              <pre className={style.infotitle}>{JSON.stringify(backFrameSelected.fileStructure, null, 2)}</pre>
              {/* {renderFileStructureInfo(backFrameSelected.fileStructure)} */}
            </>
          )}
          {frontFrameSelected && (
            <>
              <h3 className={style.infotitle}>Front-End Frameworks JSON:</h3>
              <pre className={style.infotitle}>{JSON.stringify(frontFrameSelected.fileStructure, null, 2)}</pre>
              {/* {renderFileStructureInfo(frontFrameSelected.fileStructure)} */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};


export default SelectionForm;
