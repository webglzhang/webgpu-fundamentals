import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export class NavigationHeader extends React.Component{

    render(){        
        return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">WebGPU-Fundamentals</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">主页</Nav.Link>
              <NavDropdown title="目录" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Hello</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#report">GPU报告</Nav.Link>
              <Nav.Link href="#pricing">Demo仓库</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">上一节</Nav.Link>
              <Nav.Link href="#deets">下一节</Nav.Link>
              <Nav.Link href="#deets">GitHub</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>

        
        )
   
    }
}