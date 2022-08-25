import { Button } from "@mui/material";
import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import { mapDispatch, mapState, MenuItem } from "../app/map_state_dispatch";

var contentful = require("contentful");

type PropsFromRedux = ConnectedProps<typeof connector>;

type MenuEntryContentful = {
  fields: {
    textMenu: string;
    slug: string;
  };
};

interface ClientProps extends PropsFromRedux {
  client: {
    getEntries: ({}) => Promise<{
      items: [MenuEntryContentful];
    }>;
  };
}

const connector = connect(mapState, mapDispatch);

const Menu = ({ client, menuList, addMenuItem }: ClientProps) => {
  useEffect(() => {
    client
      .getEntries({
        content_type: "menu",
      })
      .then(function (entries) {
        entries.items.map((elem: MenuEntryContentful) => {
          const itemMenu: MenuItem = {
            text: elem.fields.textMenu,
            url: elem.fields.slug,
          };
          addMenuItem(itemMenu);
        });
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
