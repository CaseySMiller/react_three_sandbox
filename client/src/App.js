//this is designed to take 16:9 images like 1280x720 in an arry of 3, 6, or 12
import "./App.css";

import ThreeJsCarousel from "./components/ThreeJsCarousel/ThreeJsCarousel";


function App() {
  const imgArr = [
    "/images/cyberpunk-city-7415576_1280.jpg",
    "/images/dreaming-7415565_1280.jpg",
    "/images/northern-7415567_1280.jpg",
    "/images/studio-ghibli-7415572_1280.jpg",
    "/images/wallpaper-7415568_1280.jpg",
    "/images/wallpaper-7415571_1280.jpg",
  ];

  return (
    <section className="fullSize">
      <ThreeJsCarousel imgArr={imgArr} />
    </section>
  );
}

export default App;

// to use this copy the folder "ThreeJsCarousel" into your project