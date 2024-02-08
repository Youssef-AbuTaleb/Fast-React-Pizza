import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      {/* Next element text should be replaced with user name */}
      <p>Youssef</p>
    </header>
  );
}

export default Header;
