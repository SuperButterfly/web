import "./Footer.css";

function Footer() {

  return (
<div>
  <footer className="contentinfo">
    <div className="csh-footer-ask-footer">
      <div className="csh-wrapper-footer">
        <div className="csh-footer-ask-text-footer">
          <p className="csh-footer-ask-text-title-footer">
            Not finding what you are looking for?
          </p>
          <p className="csh-footer-ask-text-label-footer">
            Chat with us or send us an email.
          </p>
        </div>
        <ul className="csh-footer-ask-buttons-footer">
          <li>
            <span className="csh-button-footer">
              Chat with us
            </span>
          </li>
          <li>
            <span
              aria-label="Send us an email"
              href="mailto:hello@teleporthq.io"
              role="button"
              className="csh-button-icon-email-footer"
            >
              Send us an email
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div className="csh-footer-copyright-footer">
      <div className="csh-wrapper-footer">
        <span className="csh-footer-copyright-brand-footer">
          <span className="csh-font-sans-regular-footer">© 2023</span>
        </span>
      </div>
    </div>
  </footer>
</div>
  )
}


export default Footer
