const { default: Footer } = require("./Footer");
const { default: Navbar } = require("./Navbar");

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;