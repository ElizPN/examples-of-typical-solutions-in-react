export type MenuItem = Record<"text" | "url", string>;

export interface RootState {
  menuList: {
    menuList: MenuItem[];
  };
}

export const mapState = (state: RootState) => ({
  menuList: state.menuList,
});

export const mapDispatch = {
  addMenuItem: (item: MenuItem) => ({
    type: "CHANGE_MENU",
    item,
  }),
};
