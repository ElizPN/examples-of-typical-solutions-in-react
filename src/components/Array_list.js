import React, { Component } from "react";

export function ArrayList() {
  const arr = ["a", "b", "c", "d", "e"];
  const arrayList = arr.map(function (item, index) {
    return <li key={index}>{item}</li>;
  });
  return <ul>{arrayList}</ul>;
}
