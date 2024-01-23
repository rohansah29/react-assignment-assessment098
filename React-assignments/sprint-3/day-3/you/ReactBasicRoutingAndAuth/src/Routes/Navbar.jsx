import { NavLink } from "react-router-dom";

const Links = [
  {
    to: "/login",
    label: "Login",
  },
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/contact",
    label: "Contact",
  },
  {
    to: "/products",
    label: "Products",
  },
];

function Navbar() {
  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {Links.map((Link) => (
        <NavLink key={Link.to} to={Link.to}>
          {Link.label}
        </NavLink>
      ))}
    </div>
  );
}

export { Navbar };
