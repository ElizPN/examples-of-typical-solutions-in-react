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
  isOn: {
    isOn: boolean;
  };
}

const mapState = (state: RootState) => ({
  isOn: state.isOn,
});

const mapDispatch = {
  toggleOn: () => ({ type: "TOGGLE_IS_ON" }),
};

const connector = connect(mapState, mapDispatch);

const Menu = ({ client, toggleOn, isOn }: ClientProps) => {
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
      <button onClick={toggleOn}>Toggle is {isOn.isOn ? "ON" : "OFF"}</button>
    </div>
  );
};

export default connector(Menu);
