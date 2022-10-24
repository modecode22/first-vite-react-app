export const reducerAuth = (state = {isLog:false}, action) => {
  if (action.type === "isLogIn") {
    return { isLog: true };
  }
  if (action.type === "notLogIn") {
    return { isLog:false };
  }
  return state;
};
