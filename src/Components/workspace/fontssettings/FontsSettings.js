import './fontssettings.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProject } from '../../../../src/redux/actions/projects.js';
import axios from 'axios';

const FontsSettings = () => {
  const [data, setData] = useState({
    name: 'Custom name',
    url: 'Custom font url',
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
  };

  const handleFontFileChange = ev => {
    const file = ev.target.files[0];
    setFontFile(file);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    if (fontFile || data.url) {
      const fontUrl = fontFile ? URL.createObjectURL(fontFile) : data.url;
      const fontNameValue = fontName !== '' ? fontName : fontFile?.name || data.url;
      console.log(fontUrl);
      const newFont = {
        name: fontNameValue,
        url: fontUrl
      };

      setSelectedFonts(prevFonts => [...prevFonts, newFont]);
      setFontName('');
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
        <span className="fonts-settings-nametitle">Name</span>
        <span className="fonts-settings-name-text">
          Name to be displayed in the Font list
        </span>
        <div className="fonts-settings-name-input">
          <input type="text" id="name" className="fonts-settings-name" value={fontName} onChange={handleNameChange} />
        </div>
      </div>
      <div className="fonts-settings-url-container">
        <span className="fonts-settings-heading-url">Font URL</span>
        <span className="fonts-settings-url-text1">
          Custom fonts will be available after they are added.
        </span>
        <span className="fonts-settings-url-text2">
          Adding Google Fonts can be done from inside your project.
        </span>
        <input type="text" id="url" className="fonts-settings-url" value={data.url} onChange={handleFontChange} />
        <input type="file" id="font-file" accept=".ttf,.otf" onChange={handleFontFileChange} />
      </div>
      <button className="fonts-settings-add-button button" onClick={handleSubmit}>
        Add Font
      </button>
      <div className="fonts-settings-container1">
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
