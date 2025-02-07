import Display from "./Display";
import Buttons from "./Buttons";
import { useState } from "react";
import Bg from "./bg";

function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (button) => {
    if (button === "C") {
      setCalVal("");
    } else if (button === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else if (button === "Del") {
      const DelDisplayValue = calVal.slice(0, -1);
      setCalVal(DelDisplayValue);
    } else {
      const newDisplayValue = calVal + button;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <div className="calculator z-20 bg-black bg-opacity-55 rounded-lg absolute  top-[50%] left-[20%] translate-y-[-50%] translate-x-[-50%]  flex flex-col items-center  w-[300px] border-2">
        <Display calVal={calVal} />
        <Buttons onButtonClick={onButtonClick} />
      </div>
      <div>
        <Bg />
      </div>
      <div className="w-full h-full read-only  z-10 absolute top-0 left-0 bg-transparent"></div>
    </>
  );
}

export default App;
