import "./Documentation.css";
import Header from './Header';
import Footer from './Footer';

function Documentation() {

  return (
    <div>
      <Header />

      <div id="body" className="csh-theme-background-color-light-body">
        <div className="csh-wrapper-body">
            {/* <>
            <aside>
              <div className="csh-aside">
                <p className="csh-aside-title csh-text-wrap csh-font-sans-bold">Categories</p>
                <ul role="list">
                  <li role="listitem">
                    <a
                      href="/en/category/getting-started-z4vtrk/"
                      role="link"
                      data-active="false"
                      className="csh-aside-single-line csh-font-sans-regular"
                    >Getting started
                    </a>
                  </li>
                  <li role="listitem">
                    <a
                      href="/en/category/layout-design-199z79k/"
                      role="link"
                      data-active="false"
                      className="csh-aside-single-line csh-font-sans-regular"
                    >
                      Layout &amp; design
                    </a>
                  </li>
                  <li
                    role="listitem">
                    <a
                      href="/en/category/asset-management-1a480lw/"
                      role="link"
                      data-active="false"
                      className="csh-aside-single-line csh-font-sans-regular"
                    >
                      Asset management
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
            </> */}
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
                          Web Courses
                        </span>
                      </span>
                      <span className="csh-home-list-wrap-body">
                        <span className="csh-home-list-label-body">
                        Unlock Your Web Potential.
                        </span>
                      </span>
                    </span>
                  </a>
                </li>
                <li className="listitem">
                  <a className="csh-box-body">
                    <span className="csh-home-list-image-body1"></span>
                    <span className="csh-home-list-aside-body">
                      <span className="csh-home-list-category-body">
                        <span
                          data-has-category="true"
                          className="csh-category-badge-body csh-font-sans-medium-body"
                        >
                          Design Courses
                        </span>
                      </span>
                      <span className="csh-home-list-wrap-body">
                        <span className="csh-home-list-label-body">
                        Design Your Future
                        </span>
                      </span>
                    </span>
                  </a>
                </li>
                <li className="listitem">
                  <a className="csh-box-body">
                    <span className="csh-home-list-image-body2"></span>
                    <span className="csh-home-list-aside-body">
                      <span className="csh-home-list-category-body">
                        <span
                          data-has-category="true"
                          className="csh-category-badge-body"
                        >
                          Business Courses
                        </span>
                      </span>
                      <span className="csh-home-list-wrap-body">
                        <span className="csh-home-list-label-body">
                        Empower Your Business
                        </span>
                      </span>
                    </span>
                  </a>
                </li>
                <li className="listitem">
                  <a className="csh-box-body">
                    <span className="csh-home-list-image-body3"></span>
                    <span className="csh-home-list-aside-body">
                      <span className="csh-home-list-category-body">
                        <span
                          data-has-category="true"
                          className="csh-category-badge-body"
                        >
                          Data Scients Courses
                        </span>
                      </span>
                      <span className="csh-home-list-wrap-body">
                        <span className="csh-home-list-label-body">
                        Unleash Data Mastery
                        </span>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}


export default Documentation
