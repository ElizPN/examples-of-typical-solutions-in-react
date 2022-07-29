import { FC } from "react";
import { Provider } from "react-redux";
import MyComponent from "./MyComponent";
import { store } from "../app/store";

export const Home: FC = () => {
  return (
    <div>
      <Provider store={store}>
        <MyComponent backgroundColor='black' />
      </Provider>
      <h1>Welcome! </h1>
      <p>
        On this website you will see solutions to the most common tasks on
        React. Basically, we will deal with data structures such as arrays and
        arrays of objects.
      </p>
      <p>
        It is assumed that you are already familiar with the basics of React, so
        I will not dwell on explaining how states, props and hooks work.
      </p>
      <p>
        I'll show you how to add, remove, and modify array elements. Also, you
        will learn how to display an array of objects and change any of its
        properties using inputs. We will look at how to create a universal form
        for changing and adding new elements.
      </p>
    </div>
  );
};
