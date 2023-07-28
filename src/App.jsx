import "./App.css";
import MusicSlider from "./components/Carousel/slide";
import Banner from "./layouts/Banner";
import Navbar from "./layouts/navbar/index";

function App() {
  return (
    <>
      <Navbar />
      <MusicSlider />
      <Banner />
    </>
  );
}

export default App;
