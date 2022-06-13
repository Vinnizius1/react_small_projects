import { useState } from "react";
import P1 from "./components/P1";

function Project1() {
  const [father, setFather] = useState("");

  return (
    <div style={{ textAlign: "center", margin: "3rem" }}>
      <h1>A sua tech selecionada é:</h1> 
      <hr />  
      <h1 style={{fontWeight: "bolder", color: 'blue'}}>{father}</h1>

      <P1 setProps={setFather} value={father} />
    </div>
  );
}

export default Project1;
