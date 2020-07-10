import React from 'react';
// import Baitap1 from "./Bai-tap1"
// import Baitap2 from "./Bai-tap2"
// import Baitap3 from "./Bai-tap3"
import RenderingElement from "./rendering-elements"
import HandlingEvent from "./handling-event"
import ExampleHandlingEvent from "./example/example"
import State from "./state"
import ListKeys from "./list-key"
import BaitapCar from "./Baitap-Car"
import Baitaplist from "./Baitap-list"
import './App.css';

function App() {
  return (
    <div >
      {/* <Baitap1 /> */}
      {/* <Baitap2 /> */}
      {/* <Baitap3 /> */}
      <RenderingElement />
      <hr />
      <HandlingEvent />
      <hr />
      <ExampleHandlingEvent />
      <hr />
      <State />
      <hr />
      <ListKeys />
      <hr />
      <BaitapCar />
      <hr />
      <Baitaplist />
    </div>
  );
}

export default App;
