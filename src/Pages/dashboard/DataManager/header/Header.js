import './header.css';

const Header = () => {
  return (
    <header data-role="Accordion" className="header-header">
      <img
        src="https://web.aythen.com/brand_logo.svg"
        alt="Aythen Web"
        className="header-pasted-image"
      />
      <div className="header-separator"></div>
      <nav className="header-nav">
        <nav className="header-nav1">
          <span className="header-text">About</span>
          <span className="header-text1">Features</span>
          <span className="header-text2">Pricing</span>
          <span className="header-text3">Team</span>
          <span className="header-text4">Blog</span>
        </nav>
      </nav>
    </header>
  );
};

export default Header;
