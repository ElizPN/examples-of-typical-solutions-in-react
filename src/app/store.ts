import { configureStore } from "@reduxjs/toolkit";
const onOffReducer = (state = { isOn: true }, action: any) => {
  switch (action.type) {
    case "TOGGLE_IS_ON":
      return { ...state, isOn: !state.isOn };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    isOn: onOffReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}// yoy will have your own types
export type AppDispatch = typeof store.dispatch;
