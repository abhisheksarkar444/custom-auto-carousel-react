import "./App.css";
import Carousel from "./components/carousel/Carousel";
import { images } from "./Helpers/CarouselData";

function App() {
  return (
    <div className="App">
      <Carousel slides={images} autoPlay={3} />
    </div>
  );
}

export default App;
