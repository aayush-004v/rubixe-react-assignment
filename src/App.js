import Footer from "./components/Footer/Footer";
import ContactForm from "./components/ContactForm/ContactForm";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import TechTeen from "./components/TechTeens/TechTeens";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <TechTeen />
      <ContactForm />
      <Footer />
    </div>
  );
}
