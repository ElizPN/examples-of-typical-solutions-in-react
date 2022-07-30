import { Button } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { connect, ConnectedProps, Provider } from "react-redux";
import { Link } from "react-router-dom";
import { indexof } from "stylis";
import { store } from "../app/store";
import { contentfulConfig } from "../config/contentfulConfig";

var contentful = require("contentful");

type ListLinks = Record<"text" | "url", string>[];

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
  changeState: (item: string) => ({
    type: "CHANGE_MENU",
    item,
  }),
};

const connector = connect(mapState, mapDispatch);

const Menu = ({ client, menuList, changeState }: ClientProps) => {
  const [arrayMenuState, setArrayMenuState] = useState<ListLinks>([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "menu",
      })
      .then(function (entries: any) {
        const arrayMenu: ListLinks = entries.items.map(
          (elem: { fields: { textMenu: string; slug: string } }) => {
            const itemMenu = {
              text: elem.fields.textMenu,
              url: elem.fields.slug,
            };

            return itemMenu;
          }
        );
        setArrayMenuState(arrayMenu);
      });
  }, []);

  const arrayMenuRender = arrayMenuState.map((elem, index) => {
    return (
      <Button key={index} to={elem.url} variant='outlined' component={Link}>
        {elem.text}
      </Button>
    );
  });

  return (
    <div>
      <div data-testid='menu'>{arrayMenuRender}</div>
      {menuList &&
        menuList.menuList.map((item) => {
          return <div>{item}</div>;
        })}
      <button
        onClick={() => {
          changeState("liza");
        }}
      >
        Change state
      </button>
    </div>
  );
};

export default connector(Menu);
