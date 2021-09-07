import { useState, useEffect } from 'react';
import Stats from "./components/Stats.js";
import StatsMobile from "./components/StatsMobile.js";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const SizeController = () => {
  const { height, width } = useWindowDimensions();

  if (width>1000) {
    return (
      <div>
        <p style={{color:'white'}}>{width}</p>
        <link rel="stylesheet" href="./component-styles/Stats.css"/>
        <Stats/>
      </div>
    );
  } else {
    return (
      <div>
        <p style={{color:'white'}}>{width}</p>
        <link rel="stylesheet" href="./component-styles/StatsMobile.css"/>
        <StatsMobile/>
      </div>
    );
  }
};

function App() {
  return (
    <div className="App">
      
      <SizeController/>
    </div>
  );
}

export default App;
