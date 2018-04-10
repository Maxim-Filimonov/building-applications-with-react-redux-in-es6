import { applyMiddleware, createStore } from "redux";

import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

function logger({ getState }) {
  return next => action => {
    console.log("will dispatch", action);
    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);
    console.log("state after dispatch", getState());
    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}
function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant(), logger)
  );
}
export default configureStore;
