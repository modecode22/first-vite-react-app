//2-create reduser to set state and change the data
export const reducerCounter = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DECREMENT") {
    return { counter: state.counter - 1 };
  }
  if (action.type === "RESET") {
    return { counter: 0 };
  }
  return state;
};
