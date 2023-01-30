import Link from "next/link";
import { MDBBtn } from "mdb-react-ui-kit";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <Link href="/">
        <a className="navbar-brand">Superhero identity</a>
      </Link>
      <Link href="/">
        <MDBBtn>New Identity</MDBBtn>
      </Link>
    </nav>
  );
};

export default Navbar;
