// import './Header.scss';
// import React, { useContext, useEffect, useState } from 'react';
// import { Stack, Button, Badge, ThemeProvider } from 'react-bootstrap';
// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { ThemeContext } from '../ThemeProvider/ThemeProvider';

// interface HeaderProps {
//     auth: object;
// }

// const Header: React.FC<HeaderProps> = () => {

//     const { basePrefix, toggleTheme } = useContext(ThemeContext);

//   return (
//     <ThemeProvider>
//       <Stack direction="horizontal" gap={2}>
//         <Button as="a" variant="primary" data-bs-theme='light'>
//           Button as link
//         </Button>
//         <Button as="a" variant="success">
//           Button as link
//         </Button>
//         <h1 className="firstCollapsible gap-2 d-flex justify-content-end">
//           Example heading
//           <Button variant="flat" size="lg" prefix={basePrefix}>
//             flat button
//           </Button>
//           <Badge onClick={toggleTheme} bg="secondary" as={Button}>
//             Change Theme
//           </Badge>
//         </h1>
//       </Stack>
//     </ThemeProvider>
//   );
// };

// export default Header;

import './Header.scss';
import React, { useContext, useState, useEffect } from 'react';
import { ThemeProvider, Col, Row, Image } from 'react-bootstrap';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import ProgressBar from '../ProgressBar/ProgressBar';
import AnimateTyper from '../AnimateTyper/AnimateTyper';

interface HeaderProps {
  auth: object;
}

const Header: React.FC<HeaderProps> = () => {
  const { basePrefix, toggleTheme } = useContext(ThemeContext);
  const { Brand } = Navbar;

  const styles = {
    position: 'absolute',
    top: '90%',
    left: '0'
  };

  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / height) * 1;
      setValue(progress);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [value]);

  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); // This collapses the navbar
  };

  return (
    <ThemeProvider prefixes={{ btn: basePrefix }}>
      <Navbar
        expanded={expanded}
        sticky={'top'}
        expand="lg"
        bg="header"
        className=" d-flex justify-content-center"
        style={{
          backgroundColor: '#fafafa',
          position: 'fixed',
          width: '100%',
          zIndex: 50,
          minHeight: '91px'
        }}
      >
        <Container
          fluid
          className={`d-flex justify-content-between  align-items-center gap-4 py-3 p-4`}
          style={{ width: 'clamp(99%, 5vw, 100%)', textAlign: 'right' }}
          data-bs-theme="light"
        >
          {/* {!expanded ? ( */}
          <Col lg={3}>
            <Brand href="/" style={{ position: 'relative' }} className="bold fw-bolder">
              <div style={{ position: 'absolute', top: 5, left: 13 }}>
                <AnimateTyper texts={['FOODCHOPZ']} delay={5000} />
              </div>
              FOODCHOPZ
            </Brand>
          </Col>

          {/* <Row xs={0} sm={0} lg={8} className=""> */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded((expand) => !expand)}
            // style={{ maxWidth: 50, margin: 'auto', textAlign: 'left' }}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className=""
            //   style={{ position: 'static' }}
          >
            <Nav className="text-white" onClick={handleNavClick} data-bs-theme="light">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item data-bs-theme="light" href="/product">
                  Product
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" onClick={toggleTheme}>
                  Toggle Theme
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link href="#link">Pages</Nav.Link>
            </Nav>
            <Nav
              style={{ textAlign: 'right', width: 'max-content', margin: 'auto' }}
              className="align-items-center justify-content-end ms-lg-3"
            >
              <Col>
                <Image src="/login.png" width={12} height={12} />
              </Col>
              <Col style={{ textAlign: 'right', margin: 'auto' }} className="text-black d-flex ">
                <Nav.Link style={{ color: '#23A6F0' }} href="#login">
                  Login
                </Nav.Link>
                <Nav.Link style={{ color: '#23A6F0' }} href="#" as="span">
                  /
                </Nav.Link>
                <Nav.Link style={{ color: '#23A6F0' }} href="#register">
                  Register
                </Nav.Link>
              </Col>
              <Row className="">
                <Col>
                  <Image src="/search.png" width={12} height={12} />
                </Col>
                <Col>
                  <Image src="/cart.png" width={12} height={12} />
                </Col>
              </Row>
            </Nav>
          </Navbar.Collapse>
          {/* </Row> */}
          {/* ) : (
            <>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={() => setExpanded(expanded ? false : true)}
              />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className=""
                //   style={{ position: 'static' }}
              >
                <Nav className="text-white" onClick={handleNavClick} data-bs-theme="light">
                  <Nav.Link onClick={toggleTheme} href="#home">
                    Home
                  </Nav.Link>
                  <NavDropdown title="Shop" id="basic-nav-dropdown">
                    <NavDropdown.Item data-bs-theme="light" href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#link">About</Nav.Link>
                  <Nav.Link href="#link">Blog</Nav.Link>
                  <Nav.Link href="#link">Contact</Nav.Link>
                  <Nav.Link href="#link">Pages</Nav.Link>
                </Nav>
                <Nav className="align-items-center ms-lg-3">
                  <Col>
                    <Image src="/login.png" width={12} height={12} />
                  </Col>
                  <Col className="text-black d-flex ">
                    <Nav.Link style={{ color: '#23A6F0' }} href="#login">
                      Login
                    </Nav.Link>
                    <Nav.Link style={{ color: '#23A6F0' }} href="#" as="span">
                      /
                    </Nav.Link>
                    <Nav.Link style={{ color: '#23A6F0' }} href="#register">
                      Register
                    </Nav.Link>
                  </Col>
                  <Row className="gap-2 flex-row">
                    <Col>
                      <Image src="/search.png" width={12} height={12} />
                    </Col>
                    <Col>
                      <Image src="/cart.png" width={12} height={12} />
                    </Col>
                  </Row>
                </Nav>
              </Navbar.Collapse>
            </> */}

          {/* </Row> */}
        </Container>

        <ProgressBar styles={styles} value={value} />
      </Navbar>
    </ThemeProvider>
  );
};

export default Header;
