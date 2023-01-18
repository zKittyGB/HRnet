import React from "react";
import { useDispatch } from "react-redux";

export default function InputZipCode() {
  const dispatch = useDispatch();

  return (
    <div className="zipCodeArea">
      <label htmlFor="zip-code">Zip Code</label>
      <input
        id="zip-code"
        type="number"
        onChange={(event) => {
          dispatch({ type: "setZipCode" });
        }}
      />
      <div id="zip-code-error">
        <p>Enter at least 5 characters</p>
      </div>
    </div>
  );
}
