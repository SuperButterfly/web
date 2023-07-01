import React from 'react'
import './billingDetails.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateWorkspace } from '../../../../src/redux/actions/workspaces.js';
// TODO: sacar esta constante a otro archivo
const paises = [
  { nombre: "Afganistán", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Albania", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Alemania", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Andorra", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Angola", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Antigua y Barbuda", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Arabia Saudita", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Argelia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Argentina", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Armenia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Australia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Austria", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Azerbaiyán", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Bahamas", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Bangladés", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Barbados", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Baréin", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Bélgica", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Belice", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Benín", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Bielorrusia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Birmania", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Bolivia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Bosnia y Herzegovina", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Botsuana", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Brasil", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Brunéi", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Bulgaria", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Burkina Faso", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Burundi", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Bután", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Cabo Verde", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Camboya", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Camerún", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Canadá", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Catar", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Chad", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Chile", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "China", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Chipre", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Ciudad del Vaticano", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Colombia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Comoras", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Corea del Norte", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Corea del Sur", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Costa de Marfil", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Costa Rica", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Croacia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Cuba", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Dinamarca", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Dominica", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Ecuador", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Egipto", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "El Salvador", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Emiratos Árabes Unidos", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Eritrea", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Eslovaquia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Eslovenia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "España", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Estados Unidos", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Estonia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Eswatini", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Etiopía", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Filipinas", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Finlandia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Fiyi", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Francia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Gabón", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Gambia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Georgia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Ghana", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Granada", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Grecia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Guatemala", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Guyana", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Guinea", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Guinea-Bisáu", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Guinea Ecuatorial", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Haití", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Honduras", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Hungría", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "India", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Indonesia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Irak", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Irán", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Irlanda", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Islandia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Islas Marshall", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Islas Salomón", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Israel", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Italia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Jamaica", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Japón", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Jordania", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Kazajistán", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Kenia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Kirguistán", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Kiribati", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Kuwait", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Laos", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Lesoto", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Letonia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Líbano", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Liberia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Libia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Liechtenstein", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Lituania", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Luxemburgo", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Madagascar", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Malasia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Malaui", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Maldivas", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Malí", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Malta", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Marruecos", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Mauricio", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Mauritania", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "México", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Micronesia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Moldavia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Mónaco", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Mongolia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Montenegro", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Mozambique", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Namibia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Nauru", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Nepal", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Nicaragua", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Níger", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Nigeria", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Noruega", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Nueva Zelanda", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Omán", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Países Bajos", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Pakistán", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Palaos", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Panamá", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Papúa Nueva Guinea", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Paraguay", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Perú", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Polonia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Portugal", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Reino Unido", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "República Centroafricana", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "República Checa", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "República del Congo", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "República Democrática del Congo", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "República Dominicana", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "República Sudafricana", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Ruanda", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Rumania", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Rusia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Samoa", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "San Cristóbal y Nieves", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "San Marino", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "San Vicente y las Granadinas", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Santa Lucía", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Santo Tomé y Príncipe", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Senegal", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Serbia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Seychelles", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Sierra Leona", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Singapur", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Siria", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Somalia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Sri Lanka", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Suazilandia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Sudán", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Sudán del Sur", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Suecia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Suiza", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Surinam", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Tailandia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Tanzania", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Tayikistán", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Timor Oriental", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Togo", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Tonga", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Trinidad y Tobago", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Túnez", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Turkmenistán", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Turquía", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Tuvalu", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Ucrania", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Uganda", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Uruguay", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Uzbekistán", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Vanuatu", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Venezuela", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Vietnam", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Yemen", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Yibuti", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Zambia", image: ' https://www.banderas-mundo.es/data/flags/h80/af.webp' },
  { nombre: "Zimbabue" },
]
const BillingDetails = () => {

  const [billingProperties, setBillingProperties] = useState({ account: '', name: '', address: '', country: '', method: '' })
  const dispatch = useDispatch();



  const methods = [
    'PayPal',
    'Credit Card',
    'Bank Transfer'
  ]

  const workspaces = useSelector(state => state.workspace.workspaces);
  const workspaceSelected = useSelector(state => state.workspace.workspaceSelected);

  useEffect(() => {
    console.log(workspaceSelected)
  }, [workspaces])

  const handleNameChange = (e) => {
    setBillingProperties({ ...billingProperties, name: e.target.value })
  }
  const handleAddressChange = (e) => {
    setBillingProperties({ ...billingProperties, address: e.target.value })
  }

  const handleSelectChange = (e) => {
    setBillingProperties({ ...billingProperties, country: e.target.value })
  }
  const handleOptionChange = (e) => {
    //console.log(e.target.value)
    setBillingProperties({ ...billingProperties, account: e.target.value })
  }
  const handleSelectMethodChange = (e) => {
    setBillingProperties({ ...billingProperties, method: e.target.value })
  }

  const handleSubmitChanges = async (e) => {
    //let id = localStorage.getItem('workspaceid')
    try {
      console.log(billingProperties)
      await dispatch(updateWorkspace(workspaceSelected.id, { billingdetails: billingProperties }))
      setBillingProperties({ account: '', name: '', address: '', country: '', method: '' })
      //window.location.reload();
    }
    catch (e) {
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
          <input onChange={handleOptionChange} value="Company" type="radio" className="input input" name="usertype" id="company" />
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
        <label className="text6">Billing Methods</label>
        <span className="text7 temp-text7">Choose your method</span>
        <div className="container09 temp-container09">
          <select value={billingProperties.method} onChange={handleSelectMethodChange} tabIndex="-1" className="country-select">
            <option className="temp-container05 pt-inline2">
              Choose your billing method
            </option>
            {methods.map((e, index) =>
              <option key={index} value={handleSelectMethodChange} className="temp-container05 pt-inline2">
                {e}
              </option>
            )}
          </select>
        </div>
      </div>
      <div className="container08 temp-container08">
        <label className="text6">Country</label>
        <span className="text7 temp-text7">Country that will be used for your invoice</span>
        <div className="container09 temp-container09">
          <select value={billingProperties.country} onChange={handleSelectChange} tabIndex="-1">
            <option >
              Choose your country
            </option>
            {paises.map(country => (
              <option key={country.nombre} value={country.nombre} >
                <img src={country.image} alt={`${country.nombre} flag`} className="flag-image" />
                {country.nombre}
              </option>
            ))}
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
