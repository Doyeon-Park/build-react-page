import React from "react";

function App() {
  return (
    <main style={style}>
      <section style={headerStyle}>
        <h1>Text</h1>
        <ul>Hello,world!</ul>
      </section>

      <section style={centerStyle}>
        <h1>Card within the card</h1>
        <ul>This is a card within a card</ul>
        <section style={miniStyle}>
          <h2>Inner card</h2>
          <ul>This is an inner card</ul>
        </section>
      </section>

      <section style={sectionStyle}>
        <h1>Including image</h1>
        <img
          src="https://loremflickr.com/1234/2345/cats?56789"
          width="500"
          height="500"
          alt="dynamically cat"
        />
      </section>
    </main>
  );
}

export default App;

const style = {
  margin: "0 auto",
  maxWidth: "600px",
};

const headerStyle = {
  border: "2px solid white",
  margin: "20px",
  padding: "10px",
  boxShadow: "1px 2px 9px #a0a0a0",
};

const centerStyle = {
  border: "2px solid white",
  margin: "20px",
  padding: "10px",
  boxShadow: "1px 2px 9px #a0a0a0",
};

const miniStyle = {
  border: "2px solid white",
  margin: "20px",
  padding: "5px",
  boxShadow: "1px 2px 9px #a0a0a0",
};

const sectionStyle = {
  border: "2px solid white",
  margin: "20px",
  padding: "10px",
  boxShadow: "1px 2px 9px #a0a0a0",
};
