import { connect, ConnectedProps } from "react-redux";

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

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  backgroundColor: string;
}

const MyComponent = (props: Props) => (
  <div style={{ backgroundColor: props.backgroundColor }}>
    <button onClick={props.toggleOn}>
      Toggle is {props.isOn.isOn ? "ON" : "OFF"}
    </button>
  </div>
);

export default connector(MyComponent);
