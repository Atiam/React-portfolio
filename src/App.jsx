import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form/index";


function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
