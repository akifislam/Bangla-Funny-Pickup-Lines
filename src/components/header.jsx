import { Button, Navbar, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function Header() {
  return (
    <div className="header">
      <h1>Ripon Da Random Pickup Lines </h1>
      <div className="Button">
        <Button type="submit" variant="primary" size="lg">
          Get One 😎
        </Button>
        
      </div>
    </div>
  );
}

export default Header;
