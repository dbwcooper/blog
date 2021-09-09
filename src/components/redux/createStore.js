import { createStore } from "redux";

let defaultState = {
  name: "tome",
  age: 12,
  country: "China",
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_AGE":
      return {
        ...state,
        age: state.age + 1,
      };
    default:
      break;
  }
}
const store = createStore(reducer, defaultState);
