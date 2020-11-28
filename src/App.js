import React, { useState } from "react";
import delimg from "./images/cancel.svg";
import opensvg from "./images/open.svg";
import "./App.scss";

import Sidebar from "./components/Sidebar";
import WorkExamples from "./components/WorkExamples";

function App() {
  const [isFrontoggle, setIstoggle] = useState(true);

  return (
    <div className="app">
      {isFrontoggle ? (
        <img
          alt="open"
          onClick={() => setIstoggle(!isFrontoggle)}
          className="imgdel"
          src={delimg}
        />
      ) : (
        <img
          alt="del"
          onClick={() => setIstoggle(!isFrontoggle)}
          className="imgdel"
          src={opensvg}
        />
      )}
      {isFrontoggle && <Sidebar />}

      <WorkExamples />
    </div>
  );
}

export default App;
