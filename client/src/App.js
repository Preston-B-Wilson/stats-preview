import { useState, useEffect } from 'react';
import Stats from "./components/Stats.js";

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

  if (width>1200) {
    return (
      <div>
        <link rel="stylesheet" href="./component-styles/Stats.css"/>
        <Stats 
          image='heroDesktop'
          title={'that help \n your business grow.'}
          description={'\
            Discover the benefits of data analytics and make \n \
            better decisions regarding revenue, customer \n \
            experience, and overall efficiency.'}
        />
      </div>
    );
  } else {
    
    return (
      <div>
        <link rel="stylesheet" href="./component-styles/StatsMobile.css"/>
        <Stats 
          image='heroMobile' 
          title={'that \n help your business \n grow.'}
          description={'\
            Discover the benefits of data \n \
            analytics and make better decisions \n \
            regarding revenue, customer \n \
            experience, and overall efficiency.'}
        />
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
