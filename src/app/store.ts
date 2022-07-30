import { configureStore } from "@reduxjs/toolkit";
import { MenuItem } from "../components/Menu";

const menuReducer = (
  state = { menuList: [] },
  action: { type: string; item: MenuItem }
) => {
  switch (action.type) {
    case "CHANGE_MENU":
      return { ...state, menuList: [...state.menuList, action.item] };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    menuList: menuReducer as any,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}// yoy will have your own types
export type AppDispatch = typeof store.dispatch;
