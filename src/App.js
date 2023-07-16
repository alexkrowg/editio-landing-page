import './App.css';
import Access from './components/Access/Access';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div className="px-10 md:px-12">
      <img src='assets/images/bg-1.svg' alt='' className=' absolute -left-32 top-0 w-[1000px] -z-10'/>
      <Navbar />
      <Hero />
      <Features />
      <Access />
      <Footer />
    </div>
  );
}

export default App;
