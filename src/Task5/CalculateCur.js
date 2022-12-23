import React, { useContext, useState } from "react";
import { inputContext } from "./Task5";
import { SelectContext } from "./Task5";
export const CalculateCur = () => {
  const [buttonValue, setButtonValue] = useState();
  const inputValue = useContext(inputContext);
  const selectItem = useContext(SelectContext);
  const [output, setOutput] = useState();
  const ConverHandler = (e) => {
    setButtonValue(e.target.value);
    console.log(inputValue.input);
    if (inputValue.input === "" && selectItem.selectItem === "") {
      console.log("wrong");
      alert("Please fill the boxes");
    } else if (inputValue.input === "") {
      alert("Enter indian currency");
    } else if (selectItem.selectItem === "") {
      alert("Select from dropdown");
    } else {
      var res = inputValue.input / selectItem.selectItem;
      console.log(res);
      setOutput(res);
    }
  };
  return (
    <div>
      <button className="button" value={1} onClick={ConverHandler}>
        Convert
      </button>
      <p className="output">Amount is: {output}</p>
    </div>
  );
};
