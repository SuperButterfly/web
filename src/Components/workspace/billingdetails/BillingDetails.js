import React from 'react'
import './billingDetails.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateWorkspace } from '../../../../src/redux/actions/workspaces.js';



const BillingDetails = () => {
  
  const [billingProperties, setBillingProperties] = useState({account: '', name: '', address: '', country: ''})
  const dispatch = useDispatch();
  const paises = [
    "Afganistán",
    "Albania",
    "Alemania",
    "Andorra",
    "Angola",
    "Antigua y Barbuda",
    "Arabia Saudita",
    "Argelia",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaiyán",
    "Bahamas",
    "Bangladés",
    "Barbados",
    "Baréin",
    "Bélgica",
    "Belice",
    "Benín",
    "Bielorrusia",
    "Birmania",
    "Bolivia",
    "Bosnia y Herzegovina",
    "Botsuana",
    "Brasil",
    "Brunéi",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Bután",
    "Cabo Verde",
    "Camboya",
    "Camerún",
    "Canadá",
    "Catar",
    "Chad",
    "Chile",
    "China",
    "Chipre",
    "Ciudad del Vaticano",
    "Colombia",
    "Comoras",
    "Corea del Norte",
    "Corea del Sur",
    "Costa de Marfil",
    "Costa Rica",
    "Croacia",
    "Cuba",
    "Dinamarca",
    "Dominica",
    "Ecuador",
    "Egipto",
    "El Salvador",
    "Emiratos Árabes Unidos",
    "Eritrea",
    "Eslovaquia",
    "Eslovenia",
    "España",
    "Estados Unidos",
    "Estonia",
    "Eswatini",
    "Etiopía",
    "Filipinas",
    "Finlandia",
    "Fiyi",
    "Francia",
    "Gabón",
    "Gambia",
    "Georgia",
    "Ghana",
    "Granada",
    "Grecia",
    "Guatemala",
    "Guyana",
    "Guinea",
    "Guinea-Bisáu",
    "Guinea Ecuatorial",
    "Haití",
    "Honduras",
    "Hungría",
    "India",
    "Indonesia",
    "Irak",
    "Irán",
    "Irlanda",
    "Islandia",
    "Islas Marshall",
    "Islas Salomón",
    "Israel",
    "Italia",
    "Jamaica",
    "Japón",
    "Jordania",
    "Kazajistán",
    "Kenia",
    "Kirguistán",
    "Kiribati",
    "Kuwait",
    "Laos",
    "Lesoto",
    "Letonia",
    "Líbano",
    "Liberia",
    "Libia",
    "Liechtenstein",
    "Lituania",
    "Luxemburgo",
    "Madagascar",
    "Malasia",
    "Malaui",
    "Maldivas",
    "Malí",
    "Malta",
    "Marruecos",
    "Mauricio",
    "Mauritania",
    "México",
    "Micronesia",
    "Moldavia",
    "Mónaco",
    "Mongolia",
    "Montenegro",
    "Mozambique",
    "Namibia",
    "Nauru",
    "Nepal",
    "Nicaragua",
    "Níger",
    "Nigeria",
    "Noruega",
    "Nueva Zelanda",
    "Omán",
    "Países Bajos",
    "Pakistán",
    "Palaos",
    "Panamá",
    "Papúa Nueva Guinea",
    "Paraguay",
    "Perú",
    "Polonia",
    "Portugal",
    "Reino Unido",
    "República Centroafricana",
    "República Checa",
    "República del Congo",
    "República Democrática del Congo",
    "República Dominicana",
    "República Sudafricana",
    "Ruanda",
    "Rumania",
    "Rusia",
    "Samoa",
    "San Cristóbal y Nieves",
    "San Marino",
    "San Vicente y las Granadinas",
    "Santa Lucía",
    "Santo Tomé y Príncipe",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leona",
    "Singapur",
    "Siria",
    "Somalia",
    "Sri Lanka",
    "Suazilandia",
    "Sudán",
    "Sudán del Sur",
    "Suecia",
    "Suiza",
    "Surinam",
    "Tailandia",
    "Tanzania",
    "Tayikistán",
    "Timor Oriental",
    "Togo",
    "Tonga",
    "Trinidad y Tobago",
    "Túnez",
    "Turkmenistán",
    "Turquía",
    "Tuvalu",
    "Ucrania",
    "Uganda",
    "Uruguay",
    "Uzbekistán",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Yibuti",
    "Zambia",
    "Zimbabue"
  ];
  
  const workspaces = useSelector(state => state.workspace.workspaces);
  const workspaceSelected  = useSelector(state => state.workspace.workspaceSelected);
  
  useEffect(()=>{
    console.log(workspaceSelected)
  },[workspaces])
   
const handleNameChange = (e)=>{
    setBillingProperties({...billingProperties, name: e.target.value})
  }
  const handleAddressChange = (e)=>{
    setBillingProperties({...billingProperties, address: e.target.value})
  }

  const handleSelectChange = (e)=>{
    setBillingProperties({...billingProperties, country: e.target.value})
  }
const handleOptionChange = (e)=>{
  //console.log(e.target.value)
  setBillingProperties({...billingProperties, account: e.target.value})
}

const handleSubmitChanges = async (e)=>{
    //let id = localStorage.getItem('workspaceid')
    try{
      console.log(billingProperties)
      await dispatch(updateWorkspace(workspaceSelected.id, {billingdetails: billingProperties}))
      setBillingProperties({account: '', name: '', address: '', country: ''})
      //window.location.reload();
    }
    catch(e){
      console.log(e.message)
    }
    console.log(workspaces)
}
  return (
    <div className="temp-container">
      <div className="container01 temp-container01">
        <div className="container02 temp-container02">
          <input onChange={handleOptionChange} value="Individual" type="radio" className="textinput input input" name="usertype" id="individual" />
          <label className="text temp-text" htmlFor="individual">Individual</label>
        </div>
        <div className="container03 temp-container03">
          <input onChange={handleOptionChange} value="Company" type="radio" className="input input" name="usertype" id="company"/>
          <label className="text1 temp-text1" htmlFor="company">Company</label>
        </div>
      </div>
      <div className="container04 temp-container04">
        <label className="text2">Name</label>
        <span className="text3 temp-text3">The name that will be used for your invoice</span>
        <div className="container05 temp-container05">
          <input
            type="text"
            name="name"
            onChange={handleNameChange}
            value={billingProperties.name}
            placeholder="User Name"
            className="textinput1 input temp-textinput2 input"
          />
        </div>
      </div>
      <div className="container06 temp-container06">
        <label className="text4">Address</label>
        <span className="text5 temp-text5">Billing address that will be used for your invoice</span>
        <div className="container07 temp-container07">
          <input
            type="text"
            name="address"
            onChange={handleAddressChange}
            value={billingProperties.address}
            placeholder="Calle 1234"
            className="textinput2 input temp-textinput3 input"
          />
        </div>
      </div>
      <div className="container08 temp-container08">
        <label className="text6">Country</label>
        <span className="text7 temp-text7">Country that will be used for your invoice</span>
        <div className="container09 temp-container09">
          <select value={billingProperties.country} onChange={handleSelectChange} tabIndex="-1" className="country-select">
            <option className="selection-value pt-inline">
              Choose your country
            </option>
            {paises.map (e =>
            <option value={handleSelectChange} className="selection-value pt-inline">
              {e}
            </option>
              )}
          </select>
        </div>
      </div>
      <button onClick={handleSubmitChanges} className="temp-button">
      Save Changes
      </button>
    </div>
  )
}

export default BillingDetails
