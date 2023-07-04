import "./Header.css";


function Header() {

  return (
    <div>
  <header role="banner">
  <div className="csh-wrapper">
    <div className="csh-header-main">
      <a href="/en/" role="none" className="csh-header-main-logo">
        <img src="https://storage.crisp.chat/users/helpdesk/website/60c4bca58bb99c00/teleportlogo-v24_1tjg8fo.svg" alt="TeleportHQ Help Center"/>
      </a>
      <div role="none" className="csh-header-main-actions">
        <a href="#" target="_blank" rel="noopener noreferrer" role="none" className="csh-header-main-actions-website">
          <span className="csh-header-main-actions-website-itself">Go to website</span>
        </a>
      </div>
      <span className="csh-clear"></span>
    </div>
    <div className="csh-header-title">Academy</div>
    <form action="/en/includes/search/" role="search" onsubmit="return false" data-target-suggest="/en/includes/suggest/" data-target-report="/en/includes/report/" data-has-emphasis="true" data-has-focus="false" data-expanded="false" data-pending="false" className="csh-header-search">
      <span className="csh-header-search-field">
        <input type="search" name="search_query" autocomplete="off" autocorrect="off" autocapitalize="off" maxlength="100" placeholder="Search our available courses..." aria-label="Search our available courses..." role="searchbox" onfocus="CrispHelpdeskCommon.toggle_search_focus(true)" onblur="CrispHelpdeskCommon.toggle_search_focus(false)" onkeydown="CrispHelpdeskCommon.key_search_field(event)" onkeyup="CrispHelpdeskCommon.type_search_field(this)" onsearch="CrispHelpdeskCommon.search_search_field(this)" className="csh-font-sans-regular"/>
        <span className="csh-header-search-field-autocomplete"></span>
        <span className="csh-header-search-field-ruler">
          <span className="csh-header-search-field-ruler-text"></span>
        </span>
      </span>
      <div className="csh-header-search-results"></div>
    </form>
  </div>
  <div data-tile="squares-in-squares" data-has-banner="true" className="csh-header-background">
    <span className="csh-header-background-banner"></span>
  </div>
</header>
</div>
  )
}


export default Header
