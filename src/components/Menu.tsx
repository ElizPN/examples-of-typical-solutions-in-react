import { Button } from "@mui/material";
import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import { mapDispatch, mapState, MenuItem } from "../app/map_state_dispatch";

var contentful = require("contentful");

type PropsFromRedux = ConnectedProps<typeof connector>;

interface ClientProps extends PropsFromRedux {
  client: { getEntries: ({}) => Promise<any> };
}

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
