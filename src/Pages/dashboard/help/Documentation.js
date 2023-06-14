import "./Documentation.css";
import Header from './Header';
import Footer from './Footer';

function Documentation() {

  return (
<div>
  <Header />

<div id="body" className="csh-theme-background-color-light-body">
    <div className="csh-wrapper-body">
      <div role="main" className="csh-home-body">
        <section data-type="categories">
          <h1 className="csh-home-title-body">
            Browse All Categories
          </h1>
          <ul className="csh-home-list-body">
            <li className="listitem">
              <a className="csh-box-body">
                <span className="csh-home-list-image-body"></span>
                <span className="csh-home-list-aside-body">
                  <span className="csh-home-list-category-body">
                    <span
                      data-has-category="true"
                      className="csh-category-badge-body"
                    >
                      Getting started
                    </span>
                  </span>
                  <span className="csh-home-list-wrap-body">
                    <span className="csh-home-list-label-body">
                      Start your journey by learning the basics of TeleportHQ.
                    </span>
                  </span>
                </span>
              </a>
            </li>
            <li className="listitem">
              <a className="csh-box-body">
                <span className="csh-home-list-image-body"></span>
                <span className="csh-home-list-aside-body">
                  <span className="csh-home-list-category-body">
                    <span
                      data-has-category="true"
                      className="csh-category-badge-body csh-font-sans-medium-body"
                    >
                      Elements
                    </span>
                  </span>
                  <span className="csh-home-list-wrap-body">
                    <span className="csh-home-list-label-body">
                      Get familiarized with elements; they're your basic
                      building blocks.
                    </span>
                  </span>
                </span>
              </a>
            </li>
            {/*Resto de los elementos de la lista*/}
          </ul>
        </section>
      </div>
    </div>
  </div>
  
  <Footer/>
  
</div>
  )
}


export default Documentation
