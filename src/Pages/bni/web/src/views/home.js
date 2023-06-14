import React from 'react'

// import { Helmet } from 'react-helmet'

import Container1Done from '../components/container-1-done'
import Container3Done from '../components/container-3-done'
import Contaniner2Done from '../components/contaniner-2-done'
import Container4Done from '../components/container-4-done'
import Container6Done from '../components/container-6-done'
import Container5Done from '../components/container-5-done'
import Container7Done from '../components/container-7-done'
import Container8Done from '../components/container-8-done'
import Container9Done from '../components/container-9-done'
import Container10Done from '../components/container-10-done'
import Container11Done from '../components/container-11-done'
import Container12Done from '../components/container-12-done'
import './home.css'

import '../style.css'
// <Helmet>
//         <title>805f91aa-e02a-442b-9aa9-0a98d068cfd6 (Web BNI)</title>
//         <meta
//           property="og:title"
//           content="805f91aa-e02a-442b-9aa9-0a98d068cfd6 (Web BNI)"
//         />
//       </Helmet>
      
      
const Home = (props) => {
  return (
    <div className="home-container">
      
      <Container1Done rootClassName="container1done-root-class-name"></Container1Done>
      <Container3Done rootClassName="container3done-root-class-name"></Container3Done>
      <Contaniner2Done rootClassName="contaniner2done-root-class-name"></Contaniner2Done>
      <Container4Done rootClassName="container4done-root-class-name"></Container4Done>
      <Container6Done rootClassName="container6done-root-class-name"></Container6Done>
      <Container5Done rootClassName="container5done-root-class-name"></Container5Done>
      <Container7Done rootClassName="container7done-root-class-name"></Container7Done>
      <Container8Done rootClassName="container8done-root-class-name"></Container8Done>
      <Container9Done rootClassName="container9done-root-class-name"></Container9Done>
      <Container10Done rootClassName="container10done-root-class-name"></Container10Done>
      <Container11Done rootClassName="container11done-root-class-name"></Container11Done>
      <Container12Done rootClassName="container12done-root-class-name"></Container12Done>
    </div>
  )
}

export default Home
