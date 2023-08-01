import style from './Documentation.module.css';
import Header from './Header';
import Footer from './Footer';
import BodyDocumentation from './BodyDocumentation';  
function Documentation() {
  return (
  
      <div  className= {style.container } >
      <Header /> 
      <BodyDocumentation/>
      <Footer />
      </div>
 
  )
}

export default Documentation
