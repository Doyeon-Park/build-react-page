import React, { components } from "react";
import "./Components/Header.css";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <div className="Center">
      <Gallery />;
    </div>
  );
}

export default App;
/*export default function App() {
  return (
    <div>
      <h1>Text</h1>
      <section className="box">
        <ul>Hello,World!</ul>
      </section>

      <section className="box">
        <h1>Card within the card</h1>
        <ul>This is a card within a card</ul>
        <h2>Inner card</h2>
        <ul>This is an inner card</ul>
      </section>
      <section className="box">
        <h1>Including image</h1>
      </section>
    </div>
  );
}

export default App;
*/
