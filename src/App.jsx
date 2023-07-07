import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/content";
import Footer from "./components/Footer";
import "./styles/main.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="layout">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
