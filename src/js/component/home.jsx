import React, { useState } from "react";

//create your first component
const Home = () => {
  const [activeColor, setActiveColor]=useState("")
  const [lights, setLight]=useState(["redColor", "yellowColor", "greenColor"])
	
	return (
    <div className="text-center">
      <div className="container" id="trafficLight">
       {
lights.map(light => <div onClick={()=>setActiveColor(light)} 
className={`${light} ${light==activeColor ? "active" : ""}`}></div>)
	   }
      </div>
    </div>
  );
};

export default Home;
