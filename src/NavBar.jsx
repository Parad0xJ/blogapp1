import { NavLink, Link, useLocation } from "react-router-dom";

const stylesBase = {
  padding: "8px",
  color: "black",
  textDecoration: "none",
};
const stylesActive = {
  ...stylesBase,
  backgroundColor: "#ffc107",
  borderRadius: "4px",
};
const stylesLink = (isActive) =>
  `${isActive ? "text-bg-warning rounded" : ""} nav-link`;

export default function NavBar() {
  const location = useLocation();
  // console.log("Current pathname:", location.pathname);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary-subtle">
      <div className="container-fluid">
        <a className="navbar-brand">The BLOG</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/" className={({ isActive }) => stylesLink(isActive)}>
              Home
            </NavLink>
            <NavLink
              to="/User/1"
              className={({ isActive }) => stylesLink(isActive)}
            >
              User_1
            </NavLink>
            <NavLink
              to="/User/2"
              className={({ isActive }) => stylesLink(isActive)}
            >
              User_2
            </NavLink>
            <Link
              to="/User/3"
              style={
                location.pathname === "/User/3" ? stylesActive : stylesBase
              }
            >
              User_3
            </Link>

            <Link
              to="/Apropos"
              style={
                location.pathname === "/Apropos" ? stylesActive : stylesBase
              }
            >
              À_Propos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
