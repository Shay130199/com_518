const Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>Hello</Navbar.Brand>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};
