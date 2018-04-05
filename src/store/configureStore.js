import { applyMiddleware, createStore } from "redux";

import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "../reducers";

function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}
export default configureStore;
