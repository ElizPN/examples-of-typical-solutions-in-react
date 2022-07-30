import { Button } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { connect, ConnectedProps, Provider } from "react-redux";
import { Link } from "react-router-dom";
import { indexof } from "stylis";
import { store } from "../app/store";
import { contentfulConfig } from "../config/contentfulConfig";

var contentful = require("contentful");

export type MenuItem = Record<"text" | "url", string>;
export type ListLinks = MenuItem[];

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>;

interface ClientProps extends PropsFromRedux {
  client: { getEntries: ({}) => Promise<any> };
}

interface RootState {
  menuList: {
    menuList: [];
  };
}

const mapState = (state: RootState) => ({
  menuList: state.menuList,
});

const mapDispatch = {
  addMenuItem: (item: MenuItem) => ({
    type: "CHANGE_MENU",
    item,
  }),
};

const connector = connect(mapState, mapDispatch);

const Menu = ({ client, menuList, addMenuItem }: ClientProps) => {
  useEffect(() => {
    client
      .getEntries({
        content_type: "menu",
      })
      .then(function (entries: any) {
        entries.items.map(
          (elem: { fields: { textMenu: string; slug: string } }) => {
            const itemMenu: MenuItem = {
              text: elem.fields.textMenu,
              url: elem.fields.slug,
            };
            addMenuItem(itemMenu);
          }
        );
      });
  }, []);

  return (
    <div>
      <div data-testid='menu'>
        {menuList &&
          menuList.menuList.map((elem: MenuItem, index) => {
            return (
              <Button
                key={index}
                to={elem.url}
                variant='outlined'
                component={Link}
              >
                {elem.text}
              </Button>
            );
          })}
      </div>
    </div>
  );
};

export default connector(Menu);
