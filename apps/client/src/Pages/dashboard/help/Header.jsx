import style from './Header.module.css'

function Header() {
  return (
      <header className={style.cshHeaderBackgroundBanner }>
      <div className={style.divbagrount}>
      <span className={style.bagrount}></span>
        <div className={style.cshWrapper}>
          <div className={style.cshHeaderMain}>     
            <div role="none" className={style.cshHeaderMainActions}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                role="none"
                className={style.cshHeaderMainActionsWebsite}
              >
                <span className={style.cshHeaderMainActionsWebsiteItself}>
                  Go to website
                </span>
              </a>
            </div>
          </div>
          <div className= {style.HeaderTitle}><h1>Academy</h1></div>       
              <input
                type="search"
                name="search_query"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                maxLength="100"
                placeholder="Search our available courses..."
                aria-label="Search our available courses..."
                role="searchbox"
                onFocus="CrispHelpdeskCommon.toggle_search_focus(true)"
                onBlur="CrispHelpdeskCommon.toggle_search_focus(false)"
                onKeyDown="CrispHelpdeskCommon.key_search_field(event)"
                onKeyUp="CrispHelpdeskCommon.type_search_field(this)"
                onsearch="CrispHelpdeskCommon.search_search_field(this)"
                className={style.cshFontSansRegular}
              />
            <div className={style.ccshHeaderSearchResults}></div>
        </div>
        <div
          data-tile="squares-in-squares"
          data-has-banner="true"
          className={style.cshHeaderBackground}
        >
        </div>
        </div>
      </header>
 
  )
}

export default Header
