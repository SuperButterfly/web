
import style from './Footer.module.css'
function Footer() {
  return (
      <div className={style.contentinfo}>
        <div className={style.cshFooterAskFooter}>
          <div className={style.cshWrapperFooter}>
            <div className={style.cshFooterAskTextFooter}>
              <p className={style.cshFooterAskTextTitleFooter}>
                Not finding what you are looking for?
              </p>
              <p className={style.cshFooterAskTextLabelFooter}>
                Chat with us or send us an email.
              </p>
            </div>
            <ul className={style.cshFooterAskButtonsFooter}>
              <li>
                <span className={style.cshButtonFooter}>Chat with us</span>
              </li>
              <li>
                <span
                  aria-label="Send us an email"
                  href="mailto:hello@teleporthq.io"
                  role="button"
                  className={style.cshButtonIconEmailFooter}
                >
                  Send us an email
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.cshFooterCopyrightFooter}>
          <div className={style.cshWrapperFooter}>
            <span className={style.cshFooterCopyrightBrandFooter}>
              <span className={style.cshFontSansRegularFooter}>© 2023</span>
            </span>
          </div>
        </div>
        </div>

  )
}

export default Footer
