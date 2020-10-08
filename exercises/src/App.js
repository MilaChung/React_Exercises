import React, { useState } from 'react';
import Data from "./components/data";

export default function App() {
  const [text, setTex] = useState(" ");

  return (
    <div>
      <Data label="Enter Language" onChange={setTex} value={text} />
    </div>
  );
}


