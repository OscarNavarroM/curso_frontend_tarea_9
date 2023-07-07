import React from "react";
import Columns from "./Columns";
import Welcome from "./Welcome";
import Slider from "./Slider";
import "./content.scss";
function Content() {
  return (
    <>
      <main className="layout__main">
        <Slider />
        <Columns />
        <Welcome />
      </main>
    </>
  );
}

export default Content;
