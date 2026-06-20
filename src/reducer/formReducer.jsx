export const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  errors: {}
};

export function formReducer(state, action) {
  switch (action.type) {

    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value
      };

    case "SET_ERRORS":
      return {
        ...state,
        errors: action.payload
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}