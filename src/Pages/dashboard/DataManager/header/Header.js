import './header.css';

const Header = () => {
  return (
    <header className="header-header">
      <nav className="header-nav">
        <nav className="header-nav1">
          <span className="header-text">About</span>
          <span className="header-text1">Features</span>
          <span className="header-text2">Pricing</span>
          <span className="header-text3">Team</span>
          <span className="header-text4">Blog</span>
        </nav>
      <div className="header-separator"></div>
      </nav>
    </header>
  );
};

export default Header;
