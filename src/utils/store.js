import { createStore } from "redux";

const initialState = {
  firstName: "",
  lastName: "",
  birth: "",
  dateStart: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  department: "",
};

export const setFirstNameAction = { type: "setFirstName" };
export const setLastNameAction = { type: "setLastName" };
export const setBirthAction = {
  type: "setBirth",
  payload: { date: "" },
};
export const setDateStartAction = {
  type: "setDateStart",
  payload: { date: "" },
};
export const setStreetAction = { type: "setStreet" };
export const setCityAction = { type: "setCity" };
export const setStateAction = { type: "setState" };
export const setZipCodeAction = { type: "setZipCode" };
export const setDepartmentAction = {
  type: "setDepartment",
  payload: { option: "" },
};

function reducer(state = initialState, action) {
  if (action.type === "setFirstName") {
    return {
      ...state,
      firstName: document.getElementById("first-name").value,
    };
  }
  if (action.type === "setLastName") {
    return {
      ...state,
      lastName: document.getElementById("last-name").value,
    };
  }
  if (action.type === "setBirth") {
    return {
      ...state,
      birth: action.payload.date,
    };
  }
  if (action.type === "setDateStart") {
    return {
      ...state,
      dateStart: action.payload.date,
    };
  }
  if (action.type === "setStreet") {
    return {
      ...state,
      street: document.getElementById("street").value,
    };
  }
  if (action.type === "setCity") {
    return {
      ...state,
      city: document.getElementById("city").value,
    };
  }
  if (action.type === "setState") {
    return {
      ...state,
      state: document.getElementById("state").value,
    };
  }
  if (action.type === "setZipCode") {
    return {
      ...state,
      zipCode: document.getElementById("zip-code").value,
    };
  }
  if (action.type === "setDepartment") {
    return {
      ...state,
      department: action.payload.option,
    };
  }
  return state;
}

export const store = createStore(reducer, initialState);

store.subscribe(() => {
  console.log("Nouveau state:");
  console.log(store.getState());
});
