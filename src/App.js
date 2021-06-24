import React from 'react';
import "./styles.css";

function App() {
 

  
  

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
       
        
          <div className="location-box">
            <div className="location">Delhi</div>
            <div className="date">12-06-2021</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              15 C
            </div>
            <div className="weather">Sunny</div>
          </div>
        
      
      </main>
    </div>
  );
}

export default App;