import { applyMiddleware, createStore } from "redux";

import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
export default configureStore;
