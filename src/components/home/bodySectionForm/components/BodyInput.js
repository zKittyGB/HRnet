import * as React from "react";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";

export default function ValidationTextFields({
  inputLabel,
  inputId,
  setAction,
  error,
}) {
  const dispatch = useDispatch();
  //check if no error message is there
  if (error !== "error") {
    return (
      <div>
        <TextField
          id={`${inputId}`}
          label={`${inputLabel}`}
          variant="standard"
          onKeyUp={(event) => {
            dispatch({ type: `${setAction}` });
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
          defaultValue={`${inputLabel}`}
          helperText="Incorrect entry."
          variant="standard"
          onKeyUp={(event) => {
            dispatch({ type: `${setAction}` });
          }}
        />
      </div>
    );
  }
}
