import * as React from "react";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";

export default function ValidationTextFields(props) {
  const propsValue = Object.values(props)[0];
  const inputId = Object.values(props)[1];
  const keyUpType = Object.values(props)[2];
  const dispatch = useDispatch();
  //check if no error message is there
  if (Object.values(props)[3] !== "error") {
    return (
      <div>
        <TextField
          id={`${inputId}`}
          label={`${propsValue}`}
          variant="standard"
          onKeyUp={(event) => {
            dispatch({ type: `${keyUpType}` });
          }}
        />
      </div>
    );
  } else {
    return (
      <div>
        <TextField
          error
          id={`${inputId}`}
          label="Error"
          defaultValue={`${propsValue}`}
          helperText="Incorrect entry."
          variant="standard"
          onKeyUp={(event) => {
            dispatch({ type: `${keyUpType}` });
          }}
        />
      </div>
    );
  }
}
