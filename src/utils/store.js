import { createStore } from "redux";

const initialState = {
  firstNameValidate: false,
  lastNameValidate: false,
  streetValidate: false,
  cityValidate: false,
  formValidate: false,
  firstName: "",
  lastName: "",
  birth: "",
  dateStart: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  department: "",
  employees: [
    {
      city: "Nantes",
      dateOfBirth: "Jan-19-2023",
      department: "sales",
      firstName: "Axel",
      lastName: "Hébert",
      startDate: "01 - 01 - 2023",
      state: "Loire Atlantique",
      street: "rue de port la blanche",
      zipCode: "44300",
    },
    {
      city: "Nantes",
      dateOfBirth: "Jan-19-2023",
      department: "sales",
      firstName: "Alex",
      lastName: "Hébert",
      startDate: "01 - 01 - 2023",
      state: "Loire Atlantique",
      street: "rue de port la blanche",
      zipCode: "44300",
    },
  ],
};

export const setFirstNameValidateAction = { type: "setFirstNameValidate" };
export const setFirstNameNoValidateAction = { type: "setFirstNameNoValidate" };
export const setLastNameValidateAction = { type: "setLastNameValidate" };
export const setLastNameNoValidateAction = { type: "setLastNameNoValidate" };
export const setStreetValidateAction = { type: "setStreetValidate" };
export const setStreetNoValidateAction = { type: "setStreetNoValidate" };
export const setCityValidateAction = { type: "setCityValidate" };
export const setCityNoValidateAction = { type: "setCityNoValidate" };
export const setFormValidate = {
  type: "setFormValidate",
  payload: {
    firstName: "",
    lastName: "",
    birth: "",
    dateStart: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  },
};
export const setOpenModalAction = { type: "setOpenModal" };
export const setCloseModalAction = { type: "setCloseModal" };
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
  if (action.type === "setFirstNameValidate") {
    return {
      ...state,
      firstNameValidate: "",
    };
  }
  if (action.type === "setFirstNameNoValidate") {
    return {
      ...state,
      firstNameValidate: "error",
    };
  }
  if (action.type === "setLastNameValidate") {
    return {
      ...state,
      lastNameValidate: "",
    };
  }
  if (action.type === "setLastNameNoValidate") {
    return {
      ...state,
      lastNameValidate: "error",
    };
  }
  if (action.type === "setStreetValidate") {
    return {
      ...state,
      streetValidate: "",
    };
  }
  if (action.type === "setStreetNoValidate") {
    return {
      ...state,
      streetValidate: "error",
    };
  }
  if (action.type === "setCityValidate") {
    return {
      ...state,
      cityValidate: "",
    };
  }
  if (action.type === "setCityNoValidate") {
    return {
      ...state,
      cityValidate: "error",
    };
  }
  if (action.type === "setFormValidate") {
    const newArray = [...state.employees];
    newArray.push(action.payload.option);
    return {
      ...state,
      employees: newArray,
    };
  }
  if (action.type === "setOpenModal") {
    return {
      ...state,
      formValidate: true,
    };
  }
  if (action.type === "setCloseModal") {
    return {
      ...state,
      formValidate: false,
    };
  }
  if (action.type === "setFirstName") {
    return {
      ...state,
      firstName:
        document.getElementById("first-name").value[0].toUpperCase() +
        document.getElementById("first-name").value.slice(1),
    };
  }
  if (action.type === "setLastName") {
    return {
      ...state,
      lastName:
        document.getElementById("last-name").value[0].toUpperCase() +
        document.getElementById("last-name").value.slice(1),
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
      street:
        document.getElementById("street").value[0].toUpperCase() +
        document.getElementById("street").value.slice(1),
    };
  }
  if (action.type === "setCity") {
    return {
      ...state,
      city:
        document.getElementById("city").value[0].toUpperCase() +
        document.getElementById("city").value.slice(1),
    };
  }
  if (action.type === "setState") {
    return {
      ...state,
      state: action.payload.option,
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
