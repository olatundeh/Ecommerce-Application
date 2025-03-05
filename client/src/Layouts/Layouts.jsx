<<<<<<< HEAD
import Footer from "./Footer"
import Navbar from "./Navbar"
=======
const { default: Footer } = require("./Footer");
const { default: Navbar } = require("./Navbar");
>>>>>>> f2de63300e484d0cb87d44a65b88030549cd5e1e

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