import { Route, Routes } from "react-router-dom";
// Components
import SiteLoader from "./Components/Loader/Loader";
import Header from "./Parts/Header/Header";
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Project from './Pages/Project/Project';
import Footer from "./Parts/Footer/Footer";

function App() {
  return (
    <>
      <SiteLoader />
      <Header />
        <Routes>
          <Route path="/" element={<Project/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      <Footer />
    </>
  );
}

export default App;