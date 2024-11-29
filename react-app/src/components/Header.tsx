import "./styling/Header.css";

function Header() {
  return (
    <nav className="nav-bar">
      <h1>Mischa</h1>
      <div className="nav-links">
        <a href="#about">My Work</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Header;
