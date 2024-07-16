import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";

// NavBar component with bootstrap
// export const NavBar = () => {
//   return (
//     <>
//       <Container>
//         <Navbar
//           bg="primary"
//           data-bs-theme="light"
//           expand="lg"
//           className="bg-body-tertiary"
//         >
//           <Container>
//             <Navbar.Brand href="/">Honey Rae Repairs</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="me-auto">
//                 <Nav.Link href="/">Home</Nav.Link>
//                 <Nav.Link href="/tickets">Tickets</Nav.Link>
//                 <Nav.Link href="/customers">Customers</Nav.Link>
//                 <Nav.Link href="/employees">Employees</Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       </Container>
//     </>
//   );
// };

export const EmployeeNav = () => {
  const navigate = useNavigate();

  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="navbar-item">
        <Link to={"/tickets"}>Tickets</Link>
      </li>
      <li className="navbar-item">
        <Link to={"/customers"}>Customers</Link>
      </li>
      <li className="navbar-item">
        <Link to={"/employees"}>Employees</Link>
      </li>
      <li className="navbar-item">
        <Link to="/profile">Profile</Link>
      </li>
      {localStorage.getItem("honey_user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            className="navbar-link"
            to=""
            onClick={() => {
              localStorage.removeItem("honey_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
