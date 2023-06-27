import './fontssettings.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProject } from '../../../../src/redux/actions/projects.js';
import axios from 'axios';

const FontsSettings = () => {
  const [data, setData] = useState({
    name: 'Custom name',
    url: '',
    font1: 'Georgia',
    font2: 'Impact',
    font3: 'Inter',
    urlfont3: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
  });

  const [fontName, setFontName] = useState('');
  const dispatch = useDispatch();
  const { projectSelected } = useSelector(state => state.project);
  const [fontFile, setFontFile] = useState(null);
  const [selectedFonts, setSelectedFonts] = useState([]);
  const [selectedFont, setSelectedFont] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [jsonData, setJsonData] = useState([]);
  const [isFontSelected, setIsFontSelected] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const jsonData = await response.json();
        setJsonData(jsonData.data); // Accede al array dentro del objeto JSON
        console.log(jsonData);
      } catch (error) {
        console.log('Error al cargar el archivo JSON:', error);
      }
    };
    fetchData();
  }, []);

  const handleSelectFont = (event) => {
    setSelectedOption(event.target.value);
    setIsFontSelected(true);
  };

  const handleFontChange = ev => {
    const fontUrl = ev.target.value;
    setData(prevData => ({ ...prevData, url: fontUrl }));
    axios
      .get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyArNHqjUxu6uV7L5UBZHJVgi9ru83eUaKY')
      .then(response => {
        const fonts = response.data.items;
        const fontName = extractFontNameFromUrl(fontUrl);
        const matchingFont = fonts.find(font => {
          const fontFamily = font.family.replace(/\s+/g, ' ').toLowerCase();
          return fontName === fontFamily;
        });
        if (matchingFont) {
          setFontName(matchingFont.family);
          setSelectedOption(matchingFont.family);
        } else {
          setFontName('Unknown Font');
        }
      })
      .catch(error => {
        console.error('Error fetching font details:', error);
        setFontName('Unknown Font');
      });
  };

  const extractFontNameFromUrl = url => {
    const startIndex = url.indexOf('family=') + 7;
    const endIndex = url.indexOf(':', startIndex) !== -1 ? url.indexOf(':', startIndex) : url.indexOf('&', startIndex);
    const fontName = url.substring(startIndex, endIndex).replace(/\+/g, ' ').toLowerCase();
    return fontName;
  };

  useEffect(() => {
    console.log(projectSelected);
  }, [projectSelected]);

  const handleNameChange = ev => {
    const updatedName = ev.target.value;
    setFontName(updatedName);
    setSelectedOption(ev.target.value);
  };

  const handleFontFileChange = ev => {
    const file = ev.target.files[0];
    setFontFile(file);
    setFontName(file?.name);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    if (fontFile || data.url) {
      const fontUrl = fontFile ? URL.createObjectURL(fontFile) : data.url;
      const fontNameValue = fontName !== '' ? fontName : fontFile?.name || data.url;

      // Obtener el objeto de la fuente seleccionada del JSON
      const selectedOptionObject = jsonData.find(option => option.family === selectedOption);

      // Agregar la fuente seleccionada a la lista de fuentes activas
      const newFont = {
        name: selectedOptionObject ? selectedOptionObject.family : fontNameValue,
        url: fontUrl
      };
      setSelectedFonts(prevFonts => [...prevFonts, newFont]);
      setFontName('');
      setIsFontSelected(false);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const handleDeleteFont = index => {
    setSelectedFonts(prevFonts => prevFonts.filter((_, i) => i !== index));
  };

  console.log('id', projectSelected.id);
  console.log('data', data);

  return (
    <div className="fonts-settings-container">
      <div className="fonts-settings-name-container">
        <span className="projects-settings-title">Name</span>
        <span className="fonts-settings-name-text">
          Name to be displayed in the Font list:
        </span>
        <div className="fonts-settings-name-input">
          <input type="text" id="name" className="fonts-settings-name" value={fontName} onChange={handleNameChange} />
        </div>
      </div>
      <div className="fonts-settings-url-container">
        <span className="projects-settings-title">Font URL:</span>
        <span className="fonts-settings-name-text ">
          Custom fonts will be available after they are added.
        </span>
        <span className="fonts-settings-url-text2">
          Adding Google Fonts can be done from inside your project.
        </span>
        <input type="text" id="url" className="fonts-settings-url" placeholder='copy and paste a font url' value={data.url} onChange={handleFontChange} />
        <input className="fonts-settings-add-button button" type="file" id="font-file" accept=".ttf,.otf" onChange={handleFontFileChange} />
        <span>Or you can pick one of our available fonts.</span>
        <select className="fonts-settings-url" value={selectedOption} onChange={handleSelectFont}>
          {jsonData.map((option) => (
            <option key={option.id} value={option.id}>
              {option.family}
            </option>
          ))}
        </select>
      </div>
      <button className="fonts-settings-add-button button" onClick={handleSubmit}>
        Add Font
      </button>
      {showError && (
        <div className="error-line"> <span>some fields are empty</span> </div>
      )}
      <div className="fonts-settings-container1">
        <h2 className="projects-settings-title">Font List</h2>
        <span className="fonts-settings-activefonts">Active fonts</span>
        <span className="fonts-settings-font1">{data.font1}</span>
        <span className="fonts-settings-font2">{data.font2}</span>
        <div className="fonts-settings-container2">
          {selectedFonts.map((font, index) => (
            <div key={index}>
              <span style={{ fontFamily: font.name }}>
                {font.name}
              </span>
              {/* <img src={font.url} alt={font.name} style={{ width: '100px', height: 'auto' }} /> */}
              <button className='delete-button' onClick={() => handleDeleteFont(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FontsSettings;
