import { useEffect, useState } from 'react';
import { listText, listCode } from './listText';
import style from './viewJson.module.css';

const ViewjsonData = ({ datas, properties }) => {
  const [view, setView] = useState([]);
  const [json, setJson] = useState(null); // Initialize the json state to null
  const [isCodeUpdated, setIsCodeUpdated] = useState(false);
  const [codeGPT, setCodeGPT] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetching
        const datasjson = await listText(datas.data);
        const initialJson = {
          title: datas.data[0]?.type === 'headings' ? datas.data[0] : datas.data[0]?.type === "basic Block" ? datas.data[0] : "",
          sync: properties.sync,
          path: properties.path,
          menu: properties.menu,
          data: datasjson,
          code: codeGPT,
        };

        setJson(initialJson);
        setView([initialJson]);
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, [datas, properties, codeGPT]);

  // Function to update the code property of the json object
  const updateCodeProperty = async () => {
    try {
      setIsLoading(true); // Set loading to true before fetching
      const codejson = await listCode(datas.data); // Pass datas.data directly
      setCodeGPT(codejson);
      setIsCodeUpdated(true);
      setIsLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error updating code property:", error);
      setIsLoading(false); // Set loading to false in case of error
    }
  };

  return (
    <div className={style.container}>
      <div>
        <h1>Response</h1>
        {/* Add a button to trigger the updateCodeProperty function */}
        <button onClick={updateCodeProperty}>Get the JSON</button>
      </div>
      {isLoading ? (
        <p>Loading...</p> // Render the loading message when isLoading is true
      ) : isCodeUpdated ? (
        <pre>{view.length ? JSON.stringify(view, null, 2) : null}</pre>
      ) : (
        <p>Click the button to get the JSON.</p>
      )}
    </div>
  );
};

export default ViewjsonData;
