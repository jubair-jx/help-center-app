import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className=" h-screen">
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default App;
